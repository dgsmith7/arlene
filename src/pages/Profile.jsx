import { useState, useEffect, useMemo } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import { useAuth } from "../hooks/useAuth";
import OrgData from "../components/OrgData";
import { NavLink } from "react-router-dom";
import IndivUserData from "../components/IndivUserData";
import { useAccountData } from "../hooks/useAccountData";
import UpdateProfile from "../components/UpdateProfile";

const Profile = () => {
  // const { user } = useAuth();
  const { newUser } = useAccountData();

  useEffect(() => {
    // check all of the data and open accordian and mark red as needed - maybe
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
