import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider, { useAuth } from "./context/AuthProvider/AuthProvider";
import Landing from "./pages/Landing/Landing";
import NotFound from "./pages/NotFound/NotFound";
import Register from "./pages/RegisterPage/RegisterPage";
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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
