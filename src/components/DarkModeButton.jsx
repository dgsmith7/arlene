import { FaSun, FaMoon } from "react-icons/fa";
import { useState } from "react";

export default function DarkModeButton() {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    // uses icon based on mode
    <button onClick={() => darkModeHandler()}>
      {dark && <FaSun />}
      {!dark && <FaMoon />}
    </button>
  );
}
