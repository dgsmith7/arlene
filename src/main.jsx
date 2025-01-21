import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
// import { BrowserRouter } from "react-router-dom";
//import { SnackbarProvider } from "notistack";
import App from "./App";
import "./index.css";
import { getConfig } from "./config";

const config = getConfig();

const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  //  onRedirectCallback,
  authorizationParams: {
    //redirect_uri: "http://localhost:5173",
    redirect_uri: `${window.location.origin}`,
    //redirect_uri: "https://aviation-readiness-app-sdbks.ondigitalocean.app",
    ...(config.audience ? { audience: config.audience } : null),
  },
};

console.log(`${window.location.origin}`);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Auth0Provider {...providerConfig}>
    {/* <BrowserRouter> */}
    {/* <SnackbarProvider> */}
    <App />
    {/* </SnackbarProvider> */}
    {/* </BrowserRouter> */}
  </Auth0Provider>
  // </React.StrictMode>
);
