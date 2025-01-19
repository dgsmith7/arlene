import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";
// import { useAuth } from "../hooks/useAuth";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import Spinner from "../components/Spinner";
// import { useSnackbar } from "notistack";

const Logout = () => {
  const { logout } = useAuth0();
  // const { user, logout } = useAuth();
  // const { enqueueSnackbar } = useSnackbar();
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    logout({
      logoutParams: {
        returnTo: "https://auth3-frontend-w5jsl.ondigitalocean.app/",
      },
    });
  }, []);
  return <></>;
};

// useEffect(() => {
//   if (user) {
//     setTimeout(async () => handleLogout(), 500);
//   }
// }, []);

//   // api call to handle session?
//   const handleLogout = async () => {
//     setLoading(true);
//     //let url = "http://localhost:3000";
//     let url = "https://avn-ready-backend-app-hxiez.ondigitalocean.app"; // for production

//     // Request to your backend to authenticate the user
//     let headersList = {
//       Accept: "*/*",
//       "Content-Type": "application/x-www-form-urlencoded",
//     };
//     console.log("attmepting logout...");
//     await fetch(`${url}/logout`, {
//       method: "POST",
//       credentials: "include", // to send HTTP only cookies
//       headers: headersList,
//     })
//       .then((response) => response.json())
//       .then((response) => {
//         setLoading(false);
//         if (response.message == "Logout failed") {
//           console.log("Logout failed.");
//           enqueueSnackbar("Logout failed. ", { variant: "error" });
//         } else {
//           logout();
//           console.log("Logout successful.");
//           enqueueSnackbar("Successfully logged out!", { variant: "success" });
//         }
//       })
//       .catch((error) => {
//         console.log("error - ", error);
//         enqueueSnackbar("An error occured during logout", {
//           variant: "warning",
//         });
//       });
//   };

//   return (
//     <div className="bg-backgroundLight dark:bg-backgroundDark text-textLight dark:text-textDark">
//       <Header />
//       <div id="spacer" className="h-40"></div>
//       <div className="min-h-screen">
//         <div className="flex justify-center text-center">
//           {user == null ? (
//             <div>
//               You have been logged out. Thank you for visiting. Close this
//               browser window to optimize security.
//             </div>
//           ) : (
//             <div>
//               {loading ? <Spinner /> : <></>}

//               <p>
//                 Thanks for your patronage. You will automatically be logged out
//                 shortly.
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

export default Logout;
