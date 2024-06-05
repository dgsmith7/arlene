import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Questions = ({ onQueryChange }) => {
  const [problem, setProblem] = useState("Please submit a problem.");

  return (
    <div className="p-4 bg-white text-bacon_black-700 dark:bg-bacon_black-700 dark:text-white">
      <div>
        <div className="flex items-center justify-center p-12">
          <div className="mx-auto w-full max-w-[550px]">
            <form
              className="bg-gray-500 shadow-2xl rounded px-8 pt-4 pb-4 mb-2"
              onSubmit={(e) => onQueryChange(e, problem.toString())}
            >
              {/* <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block text-black text-sm font-bold mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="email"
                  className="block text-black text-sm font-bold mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@domain.com"
                  className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="subject"
                  className="block text-black text-sm font-bold mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Enter your subject"
                  className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div> */}
              <div className="mb-5">
                <label
                  htmlFor="message"
                  className="block text-black text-sm font-bold mb-2"
                >
                  Decription of problem
                </label>
                <textarea
                  rows="4"
                  name="message"
                  id="message"
                  placeholder="Describe the problem here in plain text."
                  className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={(e) => setProblem(e.target.value)}
                ></textarea>
              </div>
              <div className="flex items-center justify-between mb-1">
                <button className="inline-block align-baseline font-bold text-lg text-black hover:text-blue-800">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
