import { useState } from "react";
import Capture from "./components/Capture";
import Response from "./components/Response";
import "./App.css";

function App() {
  //  const [query, setQuery] = useState("");
  const [advice, setAdvice] = useState("This is where the advice will appear.");

  const handleSubmit = async (e, problem) => {
    e.preventDefault();
    console.log("Submitting to AI engine", problem, typeof problem);

    await getAdvice(problem);
  };

  const getAdvice = async (problem) => {
    //  setAdvice(`Here is the advice from the AI engine for the query:${problem}`);
    //let url = "http://localhost:3000"; // for dev local
    let url = "https://avn-ready-backend-app-hxiez.ondigitalocean.app"; // for production
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };
    let bodyContent = { problem: problem };
    console.log(bodyContent, typeof bodyContent);

    await fetch(`${url}/advise`, {
      method: "POST",
      //  credentials: "include", // to send HTTP only cookies
      body: JSON.stringify(bodyContent),
      headers: headersList,
    })
      .then((response) => response.json())
      .then((r) => {
        console.log(r);
        setAdvice(r.text.message.content);
      })
      .catch((error) => {
        console.log("error - ", error);
      });
  };

  return (
    <div className="grid-rows-2">
      <div className="text-center">
        <div className="m-1 text-xl kode-mono-font">Arlene</div>
        <p>Aeronautical Readiness and Logistics Expertise eNginE</p>
      </div>
      <Capture onQueryChange={handleSubmit} />
      <Response advice={advice} />
    </div>
  );
}

export default App;
