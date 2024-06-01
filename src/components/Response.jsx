//import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const Response = ({ advice }) => {
  // const [advice, setAdvice] = useState("");

  // useEffect(() => {
  //   console.log("Query - ", { query });
  //   setAdvice("This is where the returned advice will be displayed.\n", {
  //     query,
  //   });

  //   // let url = "http://localhost:3000";
  //   // //    url = "https://bbc-backend-rg9z5.ondigitalocean.app";
  //   // setDbUrl(url);
  //   // let url = JSON.parse(localStorage.getItem("dbUrl"));

  //   // const getAdvice = async () => {
  //   //   let headersList = {
  //   //     Accept: "*/*",
  //   //     "Content-Type": "application/x-www-form-urlencoded",
  //   //   };
  //   //   let bodyContent = { query };

  //   //   await fetch(`${url}/submit-query`, {
  //   //     method: "POST",
  //   //     credentials: "include", // to send HTTP only cookies
  //   //     body: bodyContent,
  //   //     headers: headersList,
  //   //   })
  //   //     .then((response) => response.text())
  //   //     .then((r) => {
  //   //       setAdvice(r.data);
  //   //     })
  //   //     .catch((error) => {
  //   //       console.log("error - ", error);
  //   //     });
  //   // };
  //   // getAdvice();
  // }, []);

  return (
    <div className="p-4 bg-white text-bacon_black-700 dark:bg-bacon_black-700 dark:text-white">
      <div className="min-h-screen">
        <div className="flex items-center justify-center p-12">
          <div className="mx-auto w-full max-w-[550px]">
            <div className="bg-gray-500 shadow-2xl rounded px-8 pt-4 pb-4 mb-4">
              <div className="mb-5">{advice}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Response;
