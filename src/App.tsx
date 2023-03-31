import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAuth } from "./context/AuthProvider/AuthProvider";
import ChatRoom from "./components/ChatRoom/ChatRoom";
import Landing from "./pages/Landing/Landing";
import Messages from "./pages/Messages/Messages";
import Network from "./pages/Network/Network";
import NotFound from "./pages/NotFound/NotFound";
import Register from "./pages/Register/Register";
import SignIn from "./pages/SignIn/SignIn";
import Subscribe from "./pages/Subscribe/Subscribe";
import { UserProfile } from "./pages/UserProfile/UserProfile";
import { CompanyProfile } from "./pages/CompanyProfile/CompanyProfile";
import Marketplace from "./pages/Marketplace/Marketplace";
import CreateCompany from "./pages/CreateCompany/CreateCompany";
import CreateListing from "./pages/CreateListing/CreateListing";
import Navigation from "./pages/Navigation/Navigation";

const App = () => {
  const { currentUser } = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/network" element={<Network />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/messages/chat" element={<ChatRoom />} />
        <Route path="/company/:companyId" element={<CompanyProfile />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/marketplace/item" element={<Marketplace />} />
        <Route path="/create-company/step1" element={<CreateCompany />} />
        <Route path="/create-company/step2" element={<CreateCompany />} />
        <Route path="/create-listing/step1" element={<CreateListing />} />
        <Route path="/create-listing/step2" element={<CreateListing />} />
        <Route path="/create-listing/step3" element={<CreateListing />} />
      </Routes>
      <Navigation />
    </BrowserRouter>
  );
};

export default App;
