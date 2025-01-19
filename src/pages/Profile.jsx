import { useState, useEffect, useMemo } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import { useAuth } from "../hooks/useAuth";
import OrgData from "../components/OrgData";
//import { NavLink } from "react-router-dom";
import IndivUserData from "../components/IndivUserData";
import { useAccountData } from "../hooks/useAccountData";
import UpdateProfile from "../components/UpdateProfile";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

const Profile = () => {
  // const { user } = useAuth();
  const { user } = useAuth0();
  const { newUser } = useAccountData();

  const handleRegister = async () => {
//    e.preventDefault();
    setLoading(true);

    //let url = "http://localhost:3000";
    let url = "https://avn-ready-backend-app-8eg86.ondigitalocean.app"; // for production

    // Request to your backend to authenticate the user
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };

    let bodyContent = {
      "username": user.name,
      "email": user.email
    };

    await fetch(`${url}/register`, {
      method: "POST",
      //credentials: "include", // to send HTTP only cookies
      body: bodyContent,
      headers: headersList,
    })
      .then((response) => response.json())
      .then((response) => {
        setLoading(false);
        if (response.message != "Successfully registered.") {
          console.log("Signing up:", response.message, response.err);
          enqueueSnackbar("Invalid or duplicate username or email", {
            variant: "warning",
          });
        } else {
          console.log("from signin response: ", response.priv);
          enqueueSnackbar("Successfully registered", { variant: "success" });
          console.log("from signup: ", {
            username: username,
            priv: response.priv,
          });
          navigate("/login", { push: true });
        }
      })
      .catch((error) => {
        console.log("error - ", error);
        enqueueSnackbar("An error occured during authentication", {
          variant: "warning",
        });
      });
  };

  useEffect(() => {
    // check all of the data and open accordian and mark red as needed - maybe
    if (newUser) {
      handleRegister();
    }
  });



  return (
    <div className="min-h-full bg-backgroundLight dark:bg-backgroundDark text-textLight dark:text-textDark">
      <Header />
      <div id="spacer" className="h-36"></div>
      <div className="min-h-screen">
        <div className="mx-5 text-3xl font-bold text-center">
          Profile:
          {newUser != "false" ? (
            <div className="text-base m-5 font-normal bg-backgroundLight dark:bg-backgroundDark text-textLight dark:text-textDark">
              Please update all of your profile data. For best results, be sure
              to fill out the organization data as completely as possible.
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="m-5 p-5">
          <div className="m-5 p-5 shadow-lg rounded-md text-center">
            <IndivUserData />
            <button
              className="text-sm m-1"
              onClick={() => {
                const element = document.querySelector("#update-profile");
                window.scroll({
                  top: element.offsetTop - 150,
                  behavior: "smooth",
                });
              }}
            >
              Click here to update
            </button>
          </div>
        </div>
        <div className="px-2 mx-8 text-center">
          <div className="mt-5 h-18 inline-block align-baseline text-lg text-textLight dark:text-textDark hover:text-blue-800 p-1 rounded-md">
            <p className="mx-5 text-3xl font-bold">Your Organization's Data:</p>
            <p className="mx-8 my-2 text-sm">
              For best results, completely update these sections.
            </p>
          </div>
          <div>
            <OrgData />
          </div>
          <div className="mt-10 mx-5 m-5 p-5 shadow-lg" id="update-profile">
            <p className="m-5 text-3xl font-bold">Update Profile Data:</p>
            <UpdateProfile />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
