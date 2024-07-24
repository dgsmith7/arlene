import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";
import { useCsrf } from "../hooks/useCsrf";

const Admin = () => {
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);
  const { token } = useCsrf();

  useEffect(() => {
    async function getList() {
      console.log("Getting list - Token: ", { token }.token);
      setLoading(true);
      let url = "http://localhost:3000";
      let headersList = {
        Accept: "*/*",
        "Content-Type": "application/x-www-form-urlencoded",
        "X-Csrf-Token": { token }.token,
      };
      await fetch(`${url}/accountList`, {
        method: "POST",
        credentials: "include", // to send HTTP only cookies
        headers: headersList,
      })
        .then((response) => response.json())
        .then((r) => {
          setLoading(false);
          let final = Array.from(r.data);
          //       final = final.sort();
          final.sort((a, b) => (a.ingredient > b.ingredient ? 1 : -1));
          setUserList(final);
          //        setFilteredList(final);
          console.log(...final);
        })
        .catch((error) => {
          console.log("error - ", error);
        });
    }
    try {
      getList();
      //      enqueueSnackbar("Data read successfully", { variant: "success" });
    } catch (error) {
      //      enqueueSnackbar("There was a problem reading the data", {
      //   variant: "warning",
    }
  }, []);

  return (
    <div className="min-h-full p-4 bg-white text-black">
      <Header />
      <div id="spacer" className="h-20"></div>
      <div className="min-h-screen">
        <div className="flex justify-center">
          <h1>Welcome to the Admin Dashboard Page</h1>
          <p>Only accessible by users with the ADMIN role.</p>
        </div>
        <div className="justify-center">{loading ? <Spinner /> : <></>}</div>
        <div className="text-center text-xl font-bold">Users:</div>
        <div className="flex text-center mx-5">
          <div className="w-1/3 m-1 text-center font-bold">
            {"Username".padEnd(25, " ")}
          </div>
          <div className="w-1/3 m-1 text-center font-bold">
            {"Privileges".padEnd(5, " ")}
          </div>
          <div className="w-1/3 m-1 text-center font-bold">
            {"Email address".padEnd(15, " ")}
          </div>
        </div>
        <div>
          {userList.map((item, index) => (
            <div
              key={index}
              value={item}
              className="flex justify-evenly text-center mx-5"
            >
              <div className="w-1/3 m-1 text-center">
                {item.username.toString().padEnd(25, " ")}
              </div>
              <div className="w-1/3 m-1 text-center">
                {item.privileges.toString().padEnd(5, " ")}
              </div>
              <div className="w-1/3 m-1 text-center">
                {item.email.toString().padEnd(15, " ")}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Admin;
