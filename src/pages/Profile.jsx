import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useAuth } from "../hooks/useAuth";
import { useCsrf } from "../hooks/useCsrf";
import Spinner from "../components/Spinner";

const Profile = () => {
  const { user } = useAuth();
  const { token } = useCsrf();
  const { setCsrfToken } = useCsrf();
  const [loading, setLoading] = useState(false);

  const getToken = async () => {
    console.log("Token: ", { token });
    setLoading(true);
    let url = "http://localhost:3000";
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/x-www-form-urlencoded",
    };
    await fetch(`${url}/getcsrf`, {
      method: "POST",
      credentials: "include", // to send HTTP only cookies
      headers: headersList,
    })
      .then((response) => response.json())
      .then((response) => {
        setLoading(false);
        console.log(response);
        //       final = final.sort();
        setCsrfToken(response.csrfToken);
        //        setFilteredList(final);
        console.log("this is it: ", response.csrfToken);
      })
      .catch((error) => {
        console.log("error - ", error.message);
      });
  };

  useEffect(() => {
    //    if ({ token }.token == "") {
    console.log("The token is: ", { token });
    try {
      getToken();
      //      enqueueSnackbar("Data read successfully", { variant: "success" });
    } catch (error) {
      //      enqueueSnackbar("There was a problem reading the data", {
      //   variant: "warning",
      console.log("on proifle ", error);
    }
    //    }
  }, []);

  return (
    <div className="min-h-full p-4 bg-white text-black">
      <Header />
      <div id="spacer" className="h-20"></div>
      <div className="min-h-screen">
        <div className="flex justify-center">
          <div className="text-center">
            {loading ? <Spinner /> : <></>}
            <p>Profile Page. Welcome, {user.username}.</p>
            {user.twoFAVerified ? (
              <p>Two factor authentication completed.</p>
            ) : (
              <p>2FA not completed.</p>
            )}
            <p>You are logged in with {user.privileges} privileges.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
