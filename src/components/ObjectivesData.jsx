import { useState } from "react";
import { useAccountData } from "../hooks/useAccountData";

const ObjectivesData = () => {
  const { userData, updateUserData } = useAccountData();
  const [newPriObj, setNewPriObj] = useState(userData.organizationPrimaryObj);
  const [newSecObj, setNewSecObj] = useState(userData.organizationSecondaryObj);

  return (
    <>
      <div className="mb-2">
        <div className="flex justify-start block text-textLight dark:text-textDark text-lg font-bold m-2">
          What is the primary objecive of your optimization?
        </div>
        <label
          htmlFor="costs"
          className="flex justify-start block text-textLight dark:text-textDark text-base font-bold m-2"
        >
          <input
            type="radio"
            name="objective"
            id="costs"
            value="Minimize maintenance costs"
            //className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setNewPriObj(e.target.value)}
            checked={newPriObj == "Minimize maintenance costs"}
          />
          Minimize maintenance costs
        </label>
        <label
          htmlFor="readiness"
          className="flex justify-start block text-textLight dark:text-textDark text-base font-bold m-2"
        >
          <input
            type="radio"
            name="objective"
            id="readiness"
            value="Maximize operational readiness"
            //                    className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setNewPriObj(e.target.value)}
            checked={newPriObj == "Maximize operational readiness"}
          />
          Maximize operational readiness
        </label>
        <label
          htmlFor="downtime"
          className="flex justify-start block text-textLight dark:text-textDark text-base font-bold m-2"
        >
          <input
            type="radio"
            name="objective"
            id="downtime"
            value="Minimize downtime"
            //                   className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setNewPriObj(e.target.value)}
            checked={newPriObj == "Minimize downtime"}
          />
          Minimize downtime
        </label>
        <label
          htmlFor="objective"
          className="flex justify-start block text-textLight dark:text-textDark text-base font-bold m-2"
        >
          <input
            type="radio"
            name="objective"
            id="other"
            value={
              newPriObj != "Minimize maintenance costs" &&
              newPriObj != "Maximize operational readiness" &&
              newPriObj != "Minimize downtime"
                ? newPriObj
                : ""
            }
            //                  className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setNewPriObj(e.target.value)}
            checked={
              newPriObj != "Minimize maintenance costs" &&
              newPriObj != "Maximize operational readiness" &&
              newPriObj != "Minimize downtime"
            }
          />
          Other
        </label>
        <input
          type="text"
          name="otherObjectiveText"
          id="otherObjectiveText"
          placeholder="Please specify"
          value={
            newPriObj != "Minimize maintenance costs" &&
            newPriObj != "Maximize operational readiness" &&
            newPriObj != "Minimize downtime"
              ? newPriObj
              : ""
          }
          className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setNewPriObj(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="secondaryObjective"
          className="flex justify-start block text-textLight dark:text-textDark text-base font-bold m-2"
        >
          If you have any secondary objectives, please specify them below.
        </label>
        <input
          type="text"
          name="secondaryObjective"
          id="secondaryObjective"
          placeholder="Please specify"
          value={newSecObj}
          className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setNewSecObj(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-end mb-1">
        <button
          className="inline-block align-baseline font-bold text-lg bg-buttonBGLight text-buttonTextLight dark:bg-buttonBGDark dark:text-buttonTextDark p-2 rounded-lg hover:text-blue-800"
          onClick={() => {
            updateUserData(
              ["organizationPrimaryObj", "organizationSecondaryObj"],
              [newPriObj, newSecObj]
            );
          }}
        >
          Update
        </button>
      </div>
    </>
  );
};

export default ObjectivesData;
