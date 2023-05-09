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
import Protected from "./components/Protected/Protected";

const App = () => {
  const { currentUser } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/network"
          element={
            <Protected currentUser={currentUser}>
              <Network />
            </Protected>
          }
        />
        <Route
          path="/messages"
          element={
            <Protected currentUser={currentUser}>
              <Messages />
            </Protected>
          }
        />
        <Route
          path={`/gs/${currentUser?.uid}`}
          element={
            <Protected currentUser={currentUser}>
              <UserProfile />
            </Protected>
          }
        />
        <Route
          path="/gs/:user_id"
          element={
            <Protected currentUser={currentUser}>
              <MemberProfile />
            </Protected>
          }
        />
        <Route
          path="/messages/chat"
          element={
            <Protected currentUser={currentUser}>
              <ChatRoom />
            </Protected>
          }
        />
        <Route
          path="/company/:companyId"
          element={
            <Protected currentUser={currentUser}>
              <CompanyProfile />
            </Protected>
          }
        />
        <Route
          path="/marketplace"
          element={
            <Protected currentUser={currentUser}>
              <Navigate to="bf626374-4236-451f-874b-f61383d9361e" />
            </Protected>
          } // Redirect to default URL
        />
        <Route
          path="/marketplace/:listing_id"
          element={
            <Protected currentUser={currentUser}>
              <Marketplace />
            </Protected>
          }
        />
        <Route
          path="/search-company"
          element={
            <Protected currentUser={currentUser}>
              <CreateCompany />
            </Protected>
          }
        />
        <Route
          path="/create-company/step1"
          element={
            <Protected currentUser={currentUser}>
              <CreateCompany />
            </Protected>
          }
        />
        <Route
          path="/create-company/step2"
          element={
            <Protected currentUser={currentUser}>
              <CreateCompany />
            </Protected>
          }
        />
        <Route
          path="/search-affiliation"
          element={
            <Protected currentUser={currentUser}>
              <CreateListing />
            </Protected>
          }
        />
        <Route
          path="/create-listing/step1"
          element={
            <Protected currentUser={currentUser}>
              <CreateListing />
            </Protected>
          }
        />
        <Route
          path="/create-listing/step2"
          element={
            <Protected currentUser={currentUser}>
              <CreateListing />
            </Protected>
          }
        />
        <Route
          path="/create-listing/step3"
          element={
            <Protected currentUser={currentUser}>
              <CreateListing />
            </Protected>
          }
        />

        <Route path="/" element={<Landing />} />
        <Route path="/subscribe" element={<Subscribe />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      <Navigation />
    </BrowserRouter>
  );
};

export default App;
