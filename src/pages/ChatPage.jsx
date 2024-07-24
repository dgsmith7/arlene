import { useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ChatMessage from "../components/ChatMessage.jsx";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (input.trim() === "") return;

    const userMessage = { text: input, isUser: true };
    setMessages([...messages, userMessage]);

    // Simulate API response
    const gptResponse = {
      text: `**Echo:** ${input}\n\n\`\`\`js\nconsole.log('Hello, world!');\n\`\`\``,
      isUser: false,
    };
    setMessages((prevMessages) => [...prevMessages, userMessage, gptResponse]);

    setInput("");
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col bg-backgroundLight dark:bg-backgroundDark">
        <div className="flex-1 overflow-y-auto p-4">
          {messages.map((msg, idx) => (
            <ChatMessage key={idx} message={msg.text} isUser={msg.isUser} />
          ))}
        </div>
        <div className="flex p-4 bg-headerLight dark:bg-headerDark p-4 text-textLight dark:text-textDark text-center">
          <input
            type="text"
            className="my-2 ms-4 flex-1 p-2 border border-border rounded-l-lg"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="my-2 me-4 bg-buttonBGLight text-buttonTextLight dark:bg-buttonBGDark dark:text-buttonTextDark p-2 rounded-r-lg"
          >
            Send
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ChatPage;
