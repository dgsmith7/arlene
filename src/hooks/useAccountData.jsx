import { createContext, useContext, useMemo, useState, useEffect } from "react";
import Engineer from "../assets/engineer.jpg";
import Pilot from "../assets/pilot.jpg";
import Analyst from "../assets/analyst.jpg";
import Mechanic from "../assets/mechanic.jpg";
import Logistician from "../assets/logistician.jpg";
import Unnamed from "../assets/unnamed.jpg";
import { useSessionStorage } from "./useSessionStorage";
//import { useAuth } from "../hooks/useAuth";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../components/Loading";
import { getConfig } from "../config";

const {
  apiOrigin = "https://avn-ready-backend-app-8eg86.ondigitalocean.app",
  audience,
} = getConfig();

const AccountDataContext = createContext();

// eslint-disable-next-line react/prop-types
export const AccountDataProvider = ({ children }) => {
  const [userData, setUserData] = useSessionStorage("userData", null);
  const [avatar, setAvatar] = useSessionStorage("avatar", null);
  const [email, setEmail] = useSessionStorage("email", "");
  const [newUser, setNewUser] = useState("true");
  const [refresh, setRefresh] = useState("false");
  //  const { user } = useAuth();
  const { user, isAuthenticated, getAccessTokenSilently, isLoading } =
    useAuth0();

  const updateUserData = async (fieldArr, newDataObjectArr) => {
    setRefresh(!refresh);
    //    let token = await getToken();
    const token = await getAccessTokenSilently();
    //console.log("Getting userdata - Token: ", { token }.token);
    //     setLoading(true);
    //let url = "http://localhost:3000";
    let url = "https://avn-ready-backend-app-8eg86.ondigitalocean.app"; // for production
    //      let bodyContent = `username=${username}`;
    // let headersList = {
    //   Accept: "*/*",
    //   "Content-Type": "application/json",
    //   "X-Csrf-Token": token,
    // };
    await fetch(`${apiOrigin}/updateaccountdata`, {
      method: "POST",
      //      credentials: "include", // to send HTTP only cookies
      //        body: bodyContent,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        fields: fieldArr,
        data: newDataObjectArr,
      }),
    })
      .then((response) => response.json())
      .then((r) => {
        console.log("r", r);
        // //          setLoading(false);
        let final = r.data;
        let address = r.email;
        //console.log("type", typeof final);
        // console.log(address);
        if (typeof final != "undefined") {
          console.log("set - ", final);
        }
      })
      .catch((error) => {
        console.log("error - ", error);
      });
  };

  // const getToken = async () => {
  //   console.log("getting token...");
  //   let token = "";
  //   //     setLoading(true);
  //   //let url = "http://localhost:3000";
  //   //let url = "https://avn-ready-backend-app-8eg86.ondigitalocean.app"; // for production
  //   let url = "https://arlene-app.com";
  //   let headersList = {
  //     Accept: "*/*",
  //     "Content-Type": "application/x-www-form-urlencoded",
  //   };
  //   await fetch(`${url}/getcsrf`, {
  //     method: "POST",
  //     credentials: "include", // to send HTTP only cookies
  //     headers: headersList,
  //   })
  //     .then((response) => response.json())
  //     .then((response) => {
  //       //        setLoading(false);
  //       // console.log(response);
  //       console.log("this is it: ", response.csrfToken);
  //       token = response.csrfToken;
  //     })
  //     .catch((error) => {
  //       console.log("error - ", error.message);
  //     });
  //   return token;
  // };

  useEffect(() => {
    console.log("User: ", user);
    const chooseAvatar = (choice) => {
      switch (choice) {
        case "pilot":
          setAvatar(Pilot);
          break;
        case "analyst":
          setAvatar(Analyst);
          break;
        case "mechanic":
          setAvatar(Mechanic);
          break;
        case "logistician":
          setAvatar(Logistician);
          break;
        case "engineer":
          setAvatar(Engineer);
          break;
        default:
          setAvatar(Unnamed);
          break;
      }
    };

    // const getToken = async () => {
    //   console.log("getting token...");
    //   let token = "";
    //   //     setLoading(true);
    //   let url = "http://localhost:3000";
    //   let headersList = {
    //     Accept: "*/*",
    //     "Content-Type": "application/x-www-form-urlencoded",
    //   };
    //   await fetch(`${url}/getcsrf`, {
    //     method: "POST",
    //     credentials: "include", // to send HTTP only cookies
    //     headers: headersList,
    //   })
    //     .then((response) => response.json())
    //     .then((response) => {
    //       //        setLoading(false);
    //       // console.log(response);
    //       console.log("this is it: ", response.csrfToken);
    //       token = response.csrfToken;
    //     })
    //     .catch((error) => {
    //       console.log("error - ", error.message);
    //     });
    //   return token;
    // };

    const getAccountData = async () => {
      //      let token = await getToken();
      //      console.log("Getting userdata - Token: ", { token }.token);
      const token = await getAccessTokenSilently();
      //     setLoading(true);
      //let url = "http://localhost:3000";
      let url = "https://avn-ready-backend-app-8eg86.ondigitalocean.app"; // for production
      //      let bodyContent = `username=${username}`;
      // let headersList = {
      //   Accept: "*/*",
      //   "Content-Type": "application/x-www-form-urlencoded",
      //   "X-Csrf-Token": token,
      // };
      await fetch(`${apiOrigin}/getaccountdata`, {
        method: "POST",
        //credentials: "include", // to send HTTP only cookies
        //        body: bodyContent,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((r) => {
          console.log("r", r);
          // //          setLoading(false);
          let final = r.data;
          let address = r.email;
          //console.log("type", typeof final);
          // console.log(address);
          if (typeof final != "undefined") {
            console.log("finale - ", final);
            setUserData(final);
            setEmail(address);
            chooseAvatar(final.avatarChoice);
          }
        })
        .catch((error) => {
          console.log("error - ", error);
        });
    };

    if (user != null) {
      try {
        console.log("user not null:", user, typeof user);

        getAccountData();

        //      enqueueSnackbar("Data read successfully", { variant: "success" });
      } catch (error) {
        //      enqueueSnackbar("There was a problem reading the data", {
        //   variant: "error",
      }
      console.log("fn", userData.firstName);
      if (userData.firstName != " ") setNewUser("false");
    }
  }, [user]);

  const value = useMemo(
    () => ({
      userData,
      updateUserData,
      avatar,
      email,
      newUser,
    }),
    [userData, avatar, email]
  );

  return (
    <AccountDataContext.Provider value={value}>
      {children}
      {console.log("hook")}
    </AccountDataContext.Provider>
  );
};

export const useAccountData = () => {
  return useContext(AccountDataContext);
};
