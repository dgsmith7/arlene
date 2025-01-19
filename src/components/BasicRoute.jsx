import { useEffect } from "react";
//import { useAuth } from "../hooks/useAuth";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

// eslint-disable-next-line react/prop-types

const BasicRoute = ({ children }) => {
//  const { user } = useAuth();
const { user, isAuthenticated, isLoading } = useAuth0();
const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  useEffect(() => {
    // if (
    //   !user ||
    //   user.twoFAVerified != true ||
    //   (user.privileges != "Admin" && user.privileges != "Basic")
    // ) {
      if (!isAuthenticated) {
        // user is not authenticated
      enqueueSnackbar("Basic - You don't have access privileges", {
        variant: "warning",
      });
      navigate("/login", { push: true });
    }
  }, []);

  // if (
  //   !user ||
  //   user.twoFAVerified != true ||
  //   (user.privileges != "Admin" && user.privileges != "Basic")
  // ) {
    if (!isAuthenticated) {
      return <></>;
  } else {
    // user is authenticated
    return children;
  }
};

export default BasicRoute;
