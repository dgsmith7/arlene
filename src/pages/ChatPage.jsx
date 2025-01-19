import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ChatMessage from "../components/ChatMessage.jsx";
import { useAccountData } from "../hooks/useAccountData";
//import { useAuth } from "../hooks/useAuth";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "./Loading";
import { getConfig } from "../config";

export const ChatPage = () => {
  const {
    apiOrigin = "https://auth3-backend-e28n6.ondigitalocean.app",
    audience,
  } = getConfig();
  const { getAccessTokenSilently } = useAuth0();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [advice, setAdvice] = useState("");
  const location = useLocation();
  //const { user } = useAuth();
  const { userData, updateUserData } = useAccountData();

  //  const { myState } = location.state;

  const handleSend = async () => {
    if (input.trim() === "") return;
    const userMessage = { text: input, isUser: true };
    setMessages([...messages, userMessage]);
    // Simulate API response
    // const gptResponse = {
    //   text: `**Echo:** ${input}\n\n\`\`\`js\nconsole.log('Hello, world!');\n\`\`\``,
    //   isUser: false,
    // };

    //  const [query, setQuery] = useState("");
    //  const handleSubmit = async (e, problem) => {
    //    e.preventDefault();
    //    console.log("Submitting to AI engine", problem, typeof problem);
    await getAdvice(input, userMessage);
    // .then(() => {
    //   console.log("setting it.");
    //   setMessages((prevMessages) => [
    //     ...prevMessages,
    //     userMessage,
    //     { text: gptResponse, isUser: false },
    //   ]);
    // })
    // .catch((err) => {
    //   console.log(err);
    // });

    // };

    setInput("");
  };

  const getAdvice = async (problem, userMessage) => {
    //  setAdvice(`Here is the advice from the AI engine for the query:${problem}`);
    //let url = "http://localhost:3000";
    const token = await getAccessTokenSilently();
    // let url = "https://avn-ready-backend-app-8eg86.ondigitalocean.app"; // for production
    // let headersList = {
    //   Accept: "*/*",
    //   "Content-Type": "application/json",
    // };
    let bodyContent = {
      problem: problem,
      threadId: userData.threadId,
    };
    console.log(bodyContent, typeof bodyContent);
    await fetch(`${apiOrigin}/advise`, {
      method: "POST",
//      credentials: "include", // to send HTTP only cookies
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(bodyContent),
    })
      .then((response) => response.json())
      .then((r) => {
        console.log(r.text.text.value);
        setMessages((prevMessages) => [
          ...prevMessages,
          userMessage,
          { text: r.text.text.value, isUser: false },
        ]);
        //return r.text;
        //        setAdvice(r.text.message.content);
        document.querySelector("#scrollTo")?.scrollIntoView();
      })
      .catch((error) => {
        console.log("error - ", error);
      });
  };

  const initializeConversation = async (problem, userMessage) => {
    //let url = "http://localhost:3000";
    const token = await getAccessTokenSilently();
    let url = "https://avn-ready-backend-app-8eg86.ondigitalocean.app"; // for production
    // let headersList = {
    //   Accept: "*/*",
    //   "Content-Type": "application/json",
    // };
    let bodyContent = {
      problem: [
        {
          title: "question or request",
          val: problem,
        },
      ],
      needsUpdate: location.state.needsUpdate.toString(),
    };
    console.log(bodyContent, typeof bodyContent);
    await fetch(`${apiOrigin}/getfullthread`, {
      method: "POST",
      credentials: "include", // to send HTTP only cookies
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((r) => {
        console.log("And the report is: ", r.data.text);
        console.log(r.data.messages);
        setMessages([...r.data.messages.reverse()]);
      })
      .catch((error) => {
        console.log("error - ", error);
      });
  };

  useEffect(() => {
    // get thread id, get thread, update questions if needed and make needsupdate false
    console.log("This needs updating? ", location.state.needsUpdate);
    initializeConversation();
    document.querySelector("#scrollTo")?.scrollIntoView();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-backgroundLight dark:bg-backgroundDark">
      <Header />
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, idx) => (
          <ChatMessage key={idx} message={msg.text} isUser={msg.isUser} />
        ))}
      </div>
      {/* <div className="m-5 bg-black text-white">
        Get thread data. Connect to api. Parse and display response data.
      </div> */}

      <div className="flex m-2 p-4 bg-headerLight dark:bg-headerDark p-4 text-textLight dark:text-textDark text-center rounded-lg">
        <input
          type="text"
          className="my-2 ms-4 flex-1 p-2 border border-border rounded-l-lg"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          id="scrollTo"
          onClick={handleSend}
          className="my-2 me-4 bg-buttonBGLight text-buttonTextLight dark:bg-buttonBGDark dark:text-buttonTextDark p-2 rounded-r-lg"
        >
          Send
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default withAuthenticationRequired(ChatPage, {
  onRedirecting: () => <Loading />,
});
