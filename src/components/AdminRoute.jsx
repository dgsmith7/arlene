import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

// eslint-disable-next-line react/prop-types
const AdminRoute = ({ children }) => {
  const { user } = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user);
    if (!user || user.twoFAVerified != true || user.privileges != "Admin") {
      // user is not authenticated
      enqueueSnackbar("Admin - You don't have access privileges", {
        variant: "warning",
      });
      navigate("/login", { push: true });
    }
  }, []);

  if (!user || user.twoFAVerified != true || user.privileges != "Admin") {
    return <></>;
  } else {
    // user is authenticated
    return children;
  }
};

export default AdminRoute;
