import { useState } from "react";
import { useAccountData } from "../hooks/useAccountData";

const AdditionalQuestionsData = () => {
  const { userData, updateUserData } = useAccountData();
  const [newOrgOptim, setNewOrgOptim] = useState(
    userData.organizationOptimPrefs
  );
  const [newOrgSpecial, setNewOrgSpecial] = useState(
    userData.organizationSpecialConsideration
  );
  const [newOrgRealtime, setNewOrgRealtime] = useState(
    userData.organizationRealtimeData
  );
  const [newOrgStakehold, setNewOrgStakehold] = useState(
    userData.organizationStakeholders
  );

  return (
    <>
      <div>
        <label
          htmlFor="approach"
          className="flex justify-start block text-textLight dark:text-textDark text-base font-bold m-2"
        >
          Do you have any specific preferences for the optimization approach
          (e.g., linear programming, simulation, heuristic methods, etc.)?
        </label>
        <input
          type="text"
          name="approach"
          id="approach"
          value={newOrgOptim}
          className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setNewOrgOptim(e.target.value)}
        />
      </div>
      <div>
        <label
          htmlFor="uncertainties"
          className="flex justify-start block text-textLight dark:text-textDark text-base font-bold m-2"
        >
          Are there any uncertainties or variables that need special
          consideration (e.g., weather conditions, unexpected mission changes)?
        </label>
        <input
          type="text"
          name="uncertainties"
          id="uncertainties"
          value={newOrgSpecial}
          className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setNewOrgSpecial(e.target.value)}
        />
      </div>
      <div>
        <label
          htmlFor="realTime"
          className="flex justify-start block text-textLight dark:text-textDark text-base font-bold m-2"
        >
          Do you have access to real-time data or is the data static?
        </label>
        <input
          type="text"
          name="realTime"
          id="realTime"
          value={newOrgRealtime}
          className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setNewOrgRealtime(e.target.value)}
        />
      </div>
      <div>
        <label
          htmlFor="stakeHolders"
          className="flex justify-start block text-textLight dark:text-textDark text-base font-bold m-2"
        >
          Are there any stakeholder preferences or priorities that need to be
          factored into the solution?
        </label>
        <input
          type="text"
          name="stakeHolders"
          id="stakeHolders"
          value={newOrgStakehold}
          className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setNewOrgStakehold(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-end mb-1">
        <button
          className="inline-block align-baseline font-bold text-lg bg-buttonBGLight text-buttonTextLight dark:bg-buttonBGDark dark:text-buttonTextDark p-2 rounded-lg hover:text-blue-800"
          onClick={() => {
            updateUserData(
              [
                "organizationOptimPrefs",
                "organizationSpecialConsideration",
                "organizationRealtimeData",
                "organizationStakeholders",
              ],
              [newOrgOptim, newOrgSpecial, newOrgRealtime, newOrgStakehold]
            );
          }}
        >
          Update
        </button>
      </div>
    </>
  );
};

export default AdditionalQuestionsData;
