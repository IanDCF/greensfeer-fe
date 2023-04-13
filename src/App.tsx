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
        {/* {currentUser ? (
          <> */}
        <Route
          path="/network"
          element={currentUser ? <Network /> : <SignIn />}
        />
        <Route
          path="/messages"
          element={currentUser ? <Messages /> : <SignIn />}
        />
        <Route
          path={`/gs/${currentUser?.uid}`}
          element={currentUser ? <UserProfile /> : <SignIn />}
        />
        <Route
          path="/gs/:user_id"
          element={currentUser ? <MemberProfile /> : <SignIn />}
        />
        <Route
          path="/messages/chat"
          element={currentUser ? <ChatRoom /> : <SignIn />}
        />
        <Route
          path="/company/:companyId"
          element={currentUser ? <CompanyProfile /> : <SignIn />}
        />
        <Route
          path="/marketplace"
          element={
            currentUser ? (
              <Navigate to="bf626374-4236-451f-874b-f61383d9361e" />
            ) : (
              <SignIn />
            )
          } // Redirect to default URL
        />
        <Route
          path="/marketplace/:listing_id"
          element={currentUser ? <Marketplace /> : <SignIn />}
        />
        <Route
          path="/search-company"
          element={currentUser ? <CreateCompany /> : <SignIn />}
        />
        <Route
          path="/create-company/step1"
          element={currentUser ? <CreateCompany /> : <SignIn />}
        />
        <Route
          path="/create-company/step2"
          element={currentUser ? <CreateCompany /> : <SignIn />}
        />
        <Route
          path="/create-listing/step1"
          element={currentUser ? <CreateListing /> : <SignIn />}
        />
        <Route
          path="/create-listing/step2"
          element={currentUser ? <CreateListing /> : <SignIn />}
        />
        <Route
          path="/create-listing/step3"
          element={currentUser ? <CreateListing /> : <SignIn />}
        />
        {/* </>
        ) : (
          ""
        )} */}

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
