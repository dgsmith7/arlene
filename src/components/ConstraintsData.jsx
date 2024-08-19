import { useState } from "react";
import { useAccountData } from "../hooks/useAccountData";

const ConstraintsData = () => {
  const { userData, updateUserData } = useAccountData();
  const [newOrgConstr, setNewOrgConstr] = useState(
    userData.organizationConstraints
  );
  const [newOrgCompl, setNewOrgCompl] = useState(
    userData.organizationCompliance
  );
  const [newOrgOpConst, setNewOrgOpConst] = useState(
    userData.organizationOperationalConst
  );

  return (
    <>
      <div className="mb-2">
        <div className="flex justify-start block text-textLight dark:text-textDark text-lg font-bold m-2">
          What are the key constraints that need to be considered?
        </div>
        <label
          htmlFor="budget"
          className="flex justify-start block text-textLight dark:text-textDark text-base font-bold m-2"
        >
          <input
            type="radio"
            name="constraints"
            id="budget"
            value="Budget limitations"
            //className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setNewOrgConstr(e.target.value)}
            checked={newOrgConstr == "Budget limitations"}
          />
          Budget limitations
        </label>
        <label
          htmlFor="mxTime"
          className="flex justify-start block text-textLight dark:text-textDark text-lg font-bold m-2"
        >
          <input
            type="radio"
            name="constraints"
            id="mxTime"
            value="Maintenance time constraints"
            //                    className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setNewOrgConstr(e.target.value)}
            checked={newOrgConstr == "Maintenance time constraints"}
          />
          Maintenance time constraints
        </label>
        <label
          htmlFor="numAircraftAvail"
          className="flex justify-start block text-textLight dark:text-textDark text-lg font-bold m-2"
        >
          <input
            type="radio"
            name="constraints"
            id="numAircraftAvail"
            value="Number of available aircraft"
            //                   className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setNewOrgConstr(e.target.value)}
            checked={newOrgConstr == "Number of available aircraft"}
          />
          Number of available aircraft
        </label>
        <label
          htmlFor="flightHours"
          className="flex justify-start block text-textLight dark:text-textDark text-lg font-bold m-2"
        >
          <input
            type="radio"
            name="constraints"
            id="flightHours"
            value="Flight hours limits"
            //                    className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setNewOrgConstr(e.target.value)}
            checked={newOrgConstr == "Flight hours limits"}
          />
          Flight hours limits
        </label>
        <label
          htmlFor="personnel"
          className="flex justify-start block text-textLight dark:text-textDark text-lg font-bold m-2"
        >
          <input
            type="radio"
            name="constraints"
            id="personnel"
            value="Personnel availability"
            //                    className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setNewOrgConstr(e.target.value)}
            checked={newOrgConstr == "Personnel availability"}
          />
          Personnel
        </label>
        <label
          htmlFor="constraints"
          className="flex justify-start block text-textLight dark:text-textDark text-lg font-bold m-2"
        >
          <input
            type="radio"
            name="constraints"
            id="otherConstraints"
            value={
              newOrgConstr != "Budget limitations" &&
              newOrgConstr != "Maintenance time constraints" &&
              newOrgConstr != "Number of available aircraft" &&
              newOrgConstr != "Flight hours limits" &&
              newOrgConstr != "Personnel availability"
                ? newOrgConstr
                : ""
            }
            //                  className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setNewOrgConstr(e.target.value)}
            checked={
              newOrgConstr != "Budget limitations" &&
              newOrgConstr != "Maintenance time constraints" &&
              newOrgConstr != "Number of available aircraft" &&
              newOrgConstr != "Flight hours limits" &&
              newOrgConstr != "Personnel availability"
            }
          />
          Other
        </label>
        <input
          type="text"
          name="otherConstraintsText"
          id="otherConstraintsText"
          value={
            newOrgConstr != "Budget limitations" &&
            newOrgConstr != "Maintenance time constraints" &&
            newOrgConstr != "Number of available aircraft" &&
            newOrgConstr != "Flight hours limits" &&
            newOrgConstr != "Personnel availability"
              ? newOrgConstr
              : ""
          }
          placeholder="Please specify"
          className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setNewOrgConstr(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="compliance"
          className="flex justify-start block text-textLight dark:text-textDark text-lg font-bold m-2"
        >
          Are there any specific regulations or compliance requirements that
          must be met?
        </label>
        <input
          type="text"
          name="compliance"
          id="compliance"
          value={newOrgCompl}
          placeholder="Please specify"
          className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setNewOrgCompl(e.target.value)}
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="opsContraints"
          className="flex justify-start block text-textLight dark:text-textDark text-lg font-bold m-2"
        >
          What are the operational constraints (e.g., mission duration,
          distance, etc.)?
        </label>
        <input
          type="text"
          name="opsContraints"
          id="opsContraints"
          value={newOrgOpConst}
          placeholder="Please specify"
          className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setNewOrgOpConst(e.target.value)}
        />
      </div>

      <div className="flex items-center justify-end mb-1">
        <button
          className="inline-block align-baseline font-bold text-lg bg-buttonBGLight text-buttonTextLight dark:bg-buttonBGDark dark:text-buttonTextDark p-2 rounded-lg hover:text-blue-800"
          onClick={() => {
            let arr = [
              "organizationConstraints",
              "organizationCompliance",
              "organizationOperationalConst",
            ];
            console.log(arr);
            let mj = JSON.stringify(arr);
            console.log(mj);
            updateUserData(
              [
                "organizationConstraints",
                "organizationCompliance",
                "organizationOperationalConst",
              ],
              [newOrgConstr, newOrgCompl, newOrgOpConst]
            );
          }}
        >
          Update
        </button>
      </div>
    </>
  );
};

export default ConstraintsData;
