import { useState } from "react";
import { useAccountData } from "../hooks/useAccountData";

const NameData = () => {
  const { userData, updateUserData } = useAccountData();
  const [newName, setNewName] = useState(userData.organizationName);

  return (
    <>
      <div className="mb-2 ">
        <label
          htmlFor="name"
          className="flex justify-start block text-textLight dark:text-textDark text-lg font-bold m-2"
        >
          Name:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Please specify"
          value={newName}
          className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setNewName(e.target.value)}
        />
      </div>

      <div className="flex items-center justify-end mb-1">
        <button
          className="inline-block align-baseline font-bold text-lg bg-buttonBGLight text-buttonTextLight dark:bg-buttonBGDark dark:text-buttonTextDark p-2 rounded-lg hover:text-blue-800"
          onClick={() => {
            updateUserData(["organizationName"], [newName]);
          }}
        >
          Update
        </button>
      </div>
    </>
  );
};

export default NameData;
