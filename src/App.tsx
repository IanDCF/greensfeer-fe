import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import AppNavbar from "./components/AppNavbar/AppNavbar";
import NavBottom from "./components/AppNavbar/NavBottom";
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

const Navigation = () => {
  const location = useLocation();

  const isNetworkPath = location.pathname.includes("/network");
  const isMessagesPath = location.pathname.includes("/messages");
  const isProfilePath = location.pathname.includes("/profile");
  const isCompanyPath = location.pathname.includes("/company");
  const isMarketplacePath = location.pathname.includes("/marketplace");

  const shouldRenderNavBar =
    isNetworkPath ||
    isMessagesPath ||
    isProfilePath ||
    isCompanyPath ||
    isMarketplacePath;
  const shouldRenderNavBottom = shouldRenderNavBar;

  return (
    <>
      {shouldRenderNavBar && <AppNavbar />}
      {shouldRenderNavBottom && <NavBottom />}
    </>
  );
};

export default App;
