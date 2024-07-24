import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const ChatMessage = ({ message, isUser }) => {
  const handleSpeak = (text) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    synth.speak(utterance);
  };

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} my-2`}>
      <div
        className={`m-2 mx-4 max-w-lg p-3 rounded-lg ${
          isUser ? "bg-userBG text-userText" : "bg-botBG text-botText"
        }`}
      >
        <ReactMarkdown
          components={{
            code({ inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  style={coldarkDark}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code className="{className}" {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {message}
        </ReactMarkdown>
        {!isUser && (
          <button
            onClick={() => handleSpeak(message)}
            className="mt-2 text-sm text-nasaRed"
          >
            Read Aloud
          </button>
        )}
      </div>
    </div>
  );
};
export default ChatMessage;
