import { useState } from "react";
import { useAccountData } from "../hooks/useAccountData";

const TypeOptimizationData = () => {
  const { userData, updateUserData } = useAccountData();
  const [newOrgTypeOpt, setNewOrgTypeOpt] = useState(
    userData.organizationTypeOptimization
  );
  const [newOrgScenar, setNewOrgScenar] = useState(
    userData.organizationScenarios
  );

  return (
    <>
      <div className="mb-2">
        <div className="flex justify-start block text-textLight dark:text-textDark text-lg font-bold m-2">
          What type of optimization are you looking to perform?
        </div>
        <label
          htmlFor="schedOptim"
          className="flex justify-start block text-textLight dark:text-textDark text-base font-bold m-2"
        >
          <input
            type="radio"
            name="optimization"
            id="schedOptim"
            value="Scheduling optimization"
            //className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            // onChange={(e) => setProblem(e.target.value)}
            onChange={(e) => setNewOrgTypeOpt(e.target.value)}
            checked={newOrgTypeOpt == "Scheduling optimization"}
          />
          Scheduling optimization
        </label>
        <label
          htmlFor="rsrcAlloc"
          className="flex justify-start block text-textLight dark:text-textDark text-base font-bold m-2"
        >
          <input
            type="radio"
            name="optimization"
            id="rsrcAlloc"
            value="Resource allocation"
            //                    className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setNewOrgTypeOpt(e.target.value)}
            checked={newOrgTypeOpt == "Resource allocation"}
          />
          Resource allocation
        </label>
        <label
          htmlFor="routeOptim"
          className="flex justify-start block text-textLight dark:text-textDark text-base font-bold m-2"
        >
          <input
            type="radio"
            name="optimization"
            id="routeOptim"
            value="Route optimization"
            //                   className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setNewOrgTypeOpt(e.target.value)}
            checked={newOrgTypeOpt == "Route optimization"}
          />
          Route optimization
        </label>
        <label
          htmlFor="inventoryMgmt"
          className="flex justify-start block text-textLight dark:text-textDark text-base font-bold m-2"
        >
          <input
            type="radio"
            name="optimization"
            id="inventoryMgmt"
            value="Inventory management"
            //                    className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setNewOrgTypeOpt(e.target.value)}
            checked={newOrgTypeOpt == "Inventory management"}
          />
          Inventory management
        </label>
        <label
          htmlFor="riskMitig"
          className="flex justify-start block text-textLight dark:text-textDark text-base font-bold m-2"
        >
          <input
            type="radio"
            name="optimization"
            id="riskMitig"
            value="Risk assessment and mitigation"
            //                    className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setNewOrgTypeOpt(e.target.value)}
            checked={newOrgTypeOpt == "Risk assessment and mitigation"}
          />
          Risk assessment and mitigation
        </label>
        <label
          htmlFor="otherOptim"
          className="flex justify-start block text-textLight dark:text-textDark text-base font-bold m-2"
        >
          <input
            type="radio"
            name="optimization"
            id="otherOptim"
            value={
              newOrgTypeOpt != "Scheduling optimization" &&
              newOrgTypeOpt != "Resource allocation" &&
              newOrgTypeOpt != "Route optimization" &&
              newOrgTypeOpt != "Inventory management" &&
              newOrgTypeOpt != "Risk assessment and mitigation"
                ? newOrgTypeOpt
                : ""
            }
            //                  className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setNewOrgTypeOpt(e.target.value)}
            checked={
              newOrgTypeOpt != "Scheduling optimization" &&
              newOrgTypeOpt != "Resource allocation" &&
              newOrgTypeOpt != "Route optimization" &&
              newOrgTypeOpt != "Inventory management" &&
              newOrgTypeOpt != "Risk assessment and mitigation"
            }
          />
          Other
        </label>
        <input
          type="text"
          name="otherOptimText"
          id="otherOptimText"
          value={
            newOrgTypeOpt != "Scheduling optimization" &&
            newOrgTypeOpt != "Resource allocation" &&
            newOrgTypeOpt != "Route optimization" &&
            newOrgTypeOpt != "Inventory management" &&
            newOrgTypeOpt != "Risk assessment and mitigation"
              ? newOrgTypeOpt
              : ""
          }
          placeholder="Please specify"
          className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setNewOrgTypeOpt(e.target.value)}
        />
      </div>
      <div>
        <label
          htmlFor="perfData"
          className="flex justify-start block text-textLight dark:text-textDark text-base font-bold m-2"
        >
          Are there specific scenarios you want to analyze (e.g., increased
          mission tempo, reduced budget, etc.)?
        </label>
        <input
          type="text"
          name="perfData"
          id="perfData"
          value={newOrgScenar}
          className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setNewOrgScenar(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-end mb-1">
        <button
          className="inline-block align-baseline font-bold text-lg bg-buttonBGLight text-buttonTextLight dark:bg-buttonBGDark dark:text-buttonTextDark p-2 rounded-lg hover:text-blue-800"
          onClick={() => {
            updateUserData(
              ["organizationTypeOptimization", "organizationScenarios"],
              [newOrgTypeOpt, newOrgScenar]
            );
          }}
        >
          Update
        </button>
      </div>
    </>
  );
};

export default TypeOptimizationData;
