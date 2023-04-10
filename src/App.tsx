import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import MemberProfile from "./pages/MemberProfile/MemberProfile";

const App = () => {
  const { currentUser } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
{/* Protected routes based {!currentUser? <Route path={"/network" || "/messages"} element={<Landing/>}/>: "normal"} */}
        <Route path="/" element={<Landing />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/network" element={<Network />} />
        <Route path="/messages" element={<Messages />} />
        <Route path={`/gs/${currentUser?.uid}`} element={<UserProfile />} />
        <Route path="/gs/:user_id" element={<MemberProfile />} />
        <Route path="/messages/chat" element={<ChatRoom />} />
        <Route path="/company/:companyId" element={<CompanyProfile />} />
        {/* <Route path="/marketplace" element={<Marketplace />} /> */}
        <Route
        path="/marketplace"
          element={<Navigate to="668bba37-0635-4c38-b954-589e159a1d2c" />} // Redirect to default URL
          />
        <Route path="/marketplace/:listing_id" element={<Marketplace />} />
        <Route path="/search-company" element={<CreateCompany />} />
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
