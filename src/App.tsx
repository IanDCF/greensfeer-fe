import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Network from "./pages/Network/Network";
import NotFound from "./pages/NotFound/NotFound";
import Register from "./pages/Register/Register";
import RegisterInfo from "./pages/Register/RegisterInfo";
import SignIn from "./pages/SignIn/SignIn";
import Subscribe from "./pages/Subscribe/Subscribe";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/info" element={<RegisterInfo />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/network" element={<Network />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
