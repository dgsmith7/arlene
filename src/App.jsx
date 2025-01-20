import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import { Routes, Route } from "react-router-dom";
//import { AuthProvider } from "./hooks/useAuth";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "./components/Loading";

import { AccountDataProvider } from "./hooks/useAccountData";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
//import Signup from "./pages/Signup";
//import Forgot from "./pages/Forgot";
//import Reset from "./pages/Reset";
import Splash from "./pages/Splash";
import Basic from "./pages/Basic";
import ChatPage from "./pages/ChatPage";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import ErrorPage from "./pages/ErrorPage";
import BasicRoute from "./components/BasicRoute";
import AdminRoute from "./components/AdminRoute";
import "./index.css";

function App() {
  const { isLoading, error } = useAuth0();

  if (error) {
    console.log("Error...");
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    console.log("Loading...");
    return <Loading />;
  }

  return (
    //    <AuthProvider>
    <AccountDataProvider>
      <Router>
        <SnackbarProvider>
          <Routes errorElement={<ErrorPage />}>
            <Route path="/" element={<Splash />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/signup" element={<Signup />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/reset/:token" element={<Reset />} /> */}
            <Route path="/logout" element={<Logout />} />{" "}
            <Route path="/about" element={<About />} />{" "}
            {/* <Route
            path="/basic"
            element={
              <BasicRoute>
                <Basic />
              </BasicRoute>
            }
          /> */}
            <Route
              path="/chatpage"
              element={
                <BasicRoute>
                  <ChatPage />
                </BasicRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <BasicRoute>
                  <Profile />
                </BasicRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <AdminRoute>
                  <Admin />
                </AdminRoute>
              }
            />
          </Routes>
        </SnackbarProvider>
      </Router>
    </AccountDataProvider>
    //    </AuthProvider>
  );
}

export default App;
