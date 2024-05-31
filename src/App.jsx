import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="grid-rows-2">
      <div className="text-center">
        <div className="m-1 text-xl kode-mono-font">Arlene</div>
        <p>Aeronautical Readiness and Logistics Expertise eNginE</p>
      </div>
      <div className="flex justify-center">
        <div className="card m-5">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
