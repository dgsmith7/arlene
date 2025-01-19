import { useEffect } from "react";
//import { useAuth } from "../hooks/useAuth";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

// eslint-disable-next-line react/prop-types
const AdminRoute = ({ children }) => {
//  const { user } = useAuth();
const { user, isAuthenticated, isLoading } = useAuth0();
const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user);
    if (!isAuthenticated) {
//    if (!user || user.twoFAVerified != true || user.privileges != "Admin") {
      // user is not authenticated
      enqueueSnackbar("Admin - You don't have access privileges", {
        variant: "warning",
      });
      navigate("/splash", { push: true });
    }
  }, []);

//  if (!user || user.twoFAVerified != true || user.privileges != "Admin") {
  if (!isAuthenticated) {
return <></>;
  } else {
    // user is authenticated
    return children;
  }
};

export default AdminRoute;
