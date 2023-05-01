import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import { Auth0Provider } from "@auth0/auth0-react";
import "./main.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-cp450dzxvexxezfz.us.auth0.com"
      clientId="bhx7pZIVzMNXFfzptwgqckIOCwrAWEEK"
      authorizationParams={{
        //dev redirect
        redirect_uri: "http://localhost:5173/marketplace",
        // production redirect
        // redirect_uri: "https://greensfeer.com/marketplace"
      }}
    >
      <AuthProvider>
        <App />
      </AuthProvider>
    </Auth0Provider>
  </React.StrictMode>
);
