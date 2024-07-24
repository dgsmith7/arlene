import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

// eslint-disable-next-line react/prop-types
const BasicRoute = ({ children }) => {
  const { user } = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      !user ||
      user.twoFAVerified != true ||
      (user.privileges != "Admin" && user.privileges != "Basic")
    ) {
      // user is not authenticated
      enqueueSnackbar("Basic - You don't have access privileges", {
        variant: "warning",
      });
      navigate("/login", { push: true });
    }
  }, []);

  if (
    !user ||
    user.twoFAVerified != true ||
    (user.privileges != "Admin" && user.privileges != "Basic")
  ) {
    return <></>;
  } else {
    // user is authenticated
    return children;
  }
};

export default BasicRoute;
