//import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const Response = ({ advice }) => {
  // const [advice, setAdvice] = useState("");

  return (
    <div className="p-4 bg-white text-bacon_black-700 dark:bg-bacon_black-700 dark:text-white">
      <div>
        <div className="flex items-center justify-center p-12">
          <div className="mx-auto w-full max-w-[1000px]">
            <div className="bg-gray-500 shadow-2xl rounded px-8 pt-4 pb-4 mb-4">
              <div className="mb-2 display-linebreaks">{advice}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Response;
