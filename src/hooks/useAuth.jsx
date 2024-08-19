import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSessionStorage } from "./useSessionStorage";
const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useSessionStorage("user", null);
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = async (data) => {
    setUser(data);
    navigate("/profile", { push: true });
  };

  // const updateEmail = async (newEmail) => {
  //   console.log("ipdating email");
  //   let token = await getToken();
  //   console.log("Getting userdata - Token: ", { token }.token);
  //   //     setLoading(true);
  //   let url = "http://localhost:3000";
  //   //      let bodyContent = `username=${username}`;
  //   let headersList = {
  //     Accept: "*/*",
  //     "Content-Type": "application/json",
  //     "X-Csrf-Token": token,
  //   };
  //   await fetch(`${url}/updateemail`, {
  //     method: "POST",
  //     credentials: "include", // to send HTTP only cookies
  //     //        body: bodyContent,
  //     headers: headersList,
  //     body: JSON.stringify({
  //       newAddress: newEmail,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((r) => {
  //       console.log("ua response", r);
  //       // //          setLoading(false);
  //       let final = r.data;
  //       let address = r.email;
  //       //console.log("type", typeof final);
  //       // console.log(address);
  //       if (typeof final != "undefined") {
  //         console.log("set - ", final);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log("error - ", error);
  //     });
  // };

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

  // call this function to sign out logged in user
  const logout = () => {
    setUser(null);
    navigate("/logout", { push: true }, { replace: true });
  };

  console.log("UA User: ", user);

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      //      updateEmail,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
