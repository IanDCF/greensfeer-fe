import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth } from "./context/AuthProvider/AuthProvider";
import ChatRoom from "./components/ChatRoom/ChatRoom";
import Landing from "./pages/Landing/Landing";
import Messages from "./pages/Messages/Messages";
import Network from "./pages/Network/Network";
import NotFound from "./pages/NotFound/NotFound";
import Register from "./pages/RegisterPage/RegisterPage";
import SignIn from "./pages/SignIn/SignIn";
import Subscribe from "./pages/Subscribe/Subscribe";

const App = () => {
  const { currentUser } = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/youarebiutiful"
          element={
            <div style={{ fontSize: "15rem" }}>
              You are biutifullll {"<3"}
              <br />
              {currentUser?.email} with id: {currentUser?.uid}
            </div>
          }
        />
        <Route path="*" element={<NotFound />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/network" element={<Network />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/messages/chat" element={<ChatRoom />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
