import { useState } from "react";
import { useAccountData } from "../hooks/useAccountData";

const KnownData = () => {
  const { userData, updateUserData } = useAccountData();
  const [newOrgQty, setNewOrgQty] = useState(userData.organizationQtySystems);
  const [newOrgType, setNewOrgType] = useState(userData.organizationTypeSystem);
  const [newOrgMTBF, setNewOrgMTBF] = useState(userData.organizationMTBF);
  const [newOrgHours, setNewOrgHours] = useState(
    userData.organizationHoursPerMonth
  );
  const [newOrgInt, setNewOrgInt] = useState(userData.organizationIntervals);
  const [newOrgDepot, setNewOrgDepot] = useState(
    userData.organizationDepotTurnAround
  );
  const [newOrgRecent, setNewOrgRecent] = useState(
    userData.organizationRecentChanges
  );
  const [newOrgHist, setNewOrgHist] = useState(userData.organizationHistorical);

  return (
    <>
      <div className="flex justify-start block text-textLight dark:text-textDark text-lg font-bold m-2">
        Please provide the following details for your aircraft fleet:
      </div>
      <div>
        <label
          htmlFor="totalSystems"
          className="flex justify-start block text-textLight dark:text-textDark text-base font-bold m-2"
        >
          Total number of systems (aircraft)
        </label>
        <input
          type="text"
          name="totalSystems"
          id="totalSystems"
          value={newOrgQty}
          className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setNewOrgQty(e.target.value)}
        />
      </div>
      <div>
        <label
          htmlFor="systemTypes"
          className="flex justify-start block text-textLight dark:text-textDark text-base font-bold m-2"
        >
          System types and their specific characteristics
        </label>
        <input
          type="text"
          name="systemTypes"
          id="systemTypes"
          value={newOrgType}
          className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setNewOrgType(e.target.value)}
        />
      </div>
      <div>
        <label
          htmlFor="mbtf"
          className="flex justify-start block text-textLight dark:text-textDark text-base font-bold m-2"
        >
          MTBF (Mean Time Between Failures) for system and known subsystems
        </label>
        <input
          type="text"
          name="mbtf"
          id="mbtf"
          value={newOrgMTBF}
          className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setNewOrgMTBF(e.target.value)}
        />
      </div>
      <div>
        <label
          htmlFor="avgOpHrs"
          className="flex justify-start block text-textLight dark:text-textDark text-base font-bold m-2"
        >
          Average operational hours per month per system
        </label>
        <input
          type="text"
          name="avgOpHrs"
          id="avgOpHrs"
          value={newOrgHours}
          className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setNewOrgHours(e.target.value)}
        />
      </div>
      <div>
        <label
          htmlFor="mxIntervals"
          className="flex justify-start block text-textLight dark:text-textDark text-base font-bold m-2"
        >
          Provide details on the maintenance schedules and durations:
        </label>
        <input
          type="text"
          name="mxIntervals"
          id="mxIntervals"
          value={newOrgInt}
          className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setNewOrgInt(e.target.value)}
        />
      </div>
      <div>
        <label
          htmlFor="turnAround"
          className="flex justify-start block text-textLight dark:text-textDark text-base font-bold m-2"
        >
          Turn-around time for depot-level maintenance
        </label>
        <input
          type="text"
          name="turnAround"
          id="turnAround"
          value={newOrgDepot}
          className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setNewOrgDepot(e.target.value)}
        />
      </div>
      <div>
        <label
          htmlFor="recentChanges"
          className="flex justify-start block text-textLight dark:text-textDark text-base font-bold m-2"
        >
          Any recent changes to maintenance protocols
        </label>
        <input
          type="text"
          name="recentChanges"
          id="recentChanges"
          value={newOrgRecent}
          className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setNewOrgRecent(e.target.value)}
        />
      </div>
      <div>
        <label
          htmlFor="perfData"
          className="flex justify-start block text-textLight dark:text-textDark text-base font-bold m-2"
        >
          What is the historical performance data for the fleet (failure rates,
          maintenance records, etc.)?
        </label>
        <input
          type="text"
          name="perfData"
          id="perfData"
          value={newOrgHist}
          className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setNewOrgHist(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-end mb-1">
        <button
          className="inline-block align-baseline font-bold text-lg bg-buttonBGLight text-buttonTextLight dark:bg-buttonBGDark dark:text-buttonTextDark p-2 rounded-lg hover:text-blue-800"
          onClick={() => {
            updateUserData(
              [
                "organizationQtySystems",
                "organizationTypeSystem",
                "organizationMTBF",
                "organizationHoursPerMonth",
                "organizationIntervals",
                "organizationDepotTurnAround",
                "organizationRecentChanges",
                "organizationHistorical",
              ],
              [
                newOrgQty,
                newOrgType,
                newOrgMTBF,
                newOrgHours,
                newOrgInt,
                newOrgDepot,
                newOrgRecent,
                newOrgHist,
              ]
            );
          }}
        >
          Update
        </button>
      </div>
    </>
  );
};

export default KnownData;
