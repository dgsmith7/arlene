import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import { CsrfProvider } from "./hooks/useCsrf";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Signup from "./pages/Signup";
import Forgot from "./pages/Forgot";
import Reset from "./pages/Reset";
import Index from "./pages/Index";
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
  return (
    <AuthProvider>
      <CsrfProvider>
        <Routes errorElement={<ErrorPage />}>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/reset/:token" element={<Reset />} />
          <Route path="/logout" element={<Logout />} />{" "}
          <Route path="/about" element={<About />} />{" "}
          <Route
            path="/basic"
            element={
              <BasicRoute>
                <Basic />
              </BasicRoute>
            }
          />
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
      </CsrfProvider>
    </AuthProvider>
  );
}

export default App;
