import { useState } from "react";
import { useAccountData } from "../hooks/useAccountData";

const DesiredSolutionData = () => {
  const { userData, updateUserData } = useAccountData();
  const [newOrgFormat, setNewOrgFormat] = useState(userData.organizationFormat);
  const [newOrgTime, setNewOrgTime] = useState(userData.organizationTimeframe);
  const [newOrgMetric, setNewOrgMetric] = useState(
    userData.organizationMetrics
  );

  return (
    <>
      <div className="flex justify-start block text-textLight dark:text-textDark text-lg font-bold m-2">
        What format do you expect the final solution to be in?
      </div>
      <label
        htmlFor="report"
        className="flex justify-start block text-textLight dark:text-textDark text-base font-bold m-2"
      >
        <input
          type="radio"
          name="solution"
          id="report"
          value="Detailed report"
          onChange={(e) => setNewOrgFormat(e.target.value)}
          checked={newOrgFormat == "Detailed report"}
        />
        Detailed report
      </label>
      <label
        htmlFor="Dashboard"
        className="flex justify-start block text-textLight dark:text-textDark text-base font-bold m-2"
      >
        <input
          type="radio"
          name="solution"
          id="Dashboard"
          value="Dashboard with visualizations"
          onChange={(e) => setNewOrgFormat(e.target.value)}
          checked={newOrgFormat == "Dashboard with visualizations"}
        />
        Dashboard with visualizations
      </label>
      <label
        htmlFor="steps"
        className="flex justify-start block text-textLight dark:text-textDark text-base font-bold m-2"
      >
        <input
          type="radio"
          name="solution"
          id="steps"
          value="Actionable steps and recommendations"
          onChange={(e) => setNewOrgFormat(e.target.value)}
          checked={newOrgFormat == "Actionable steps and recommendations"}
        />
        Actionable steps and recommendations
      </label>
      <label
        htmlFor="chart"
        className="flex justify-start block text-textLight dark:text-textDark text-base font-bold m-2"
      >
        <input
          type="radio"
          name="solution"
          id="chart"
          value="Timeline chart or workflow chart"
          onChange={(e) => setNewOrgFormat(e.target.value)}
          checked={newOrgFormat == "Timeline chart or workflow chart"}
        />
        Timeline chart or workflow chart
      </label>
      <label
        htmlFor="otherFormat"
        className="flex justify-start block text-textLight dark:text-textDark text-base font-bold m-2"
      >
        <input
          type="radio"
          name="solution"
          id="otherFormat"
          value={
            newOrgFormat != "Detailed report" &&
            newOrgFormat != "Dashboard with visualizations" &&
            newOrgFormat != "Actionable steps and recommendations" &&
            newOrgFormat != "Timeline chart or workflow chart"
              ? newOrgFormat
              : ""
          }
          onChange={(e) => setNewOrgFormat(e.target.value)}
          checked={
            newOrgFormat != "Detailed report" &&
            newOrgFormat != "Dashboard with visualizations" &&
            newOrgFormat != "Actionable steps and recommendations" &&
            newOrgFormat != "Timeline chart or workflow chart"
          }
        />
        Other
      </label>{" "}
      <input
        type="text"
        name="otherFormatText"
        id="otherFormatText"
        value={
          newOrgFormat != "Detailed report" &&
          newOrgFormat != "Dashboard with visualizations" &&
          newOrgFormat != "Actionable steps and recommendations" &&
          newOrgFormat != "Timeline chart or workflow chart"
            ? newOrgFormat
            : ""
        }
        placeholder="Please specify"
        className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        onChange={(e) => setNewOrgFormat(e.target.value)}
      />
      <label
        htmlFor="timeFrame"
        className="flex justify-start block text-textLight dark:text-textDark text-base font-bold m-2"
      >
        What is the desired time frame for implementing the optimized solution?
      </label>
      <input
        type="text"
        name="timeFrame"
        id="timeFrame"
        value={newOrgTime}
        className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        onChange={(e) => setNewOrgTime(e.target.value)}
      />
      <label
        htmlFor="metrics"
        className="flex justify-start block text-textLight dark:text-textDark text-base font-bold m-2"
      >
        Are there any specific metrics or KPIs you would like to track to
        measure the success of the solution?
      </label>
      <input
        type="text"
        name="metrics"
        id="metrics"
        value={newOrgMetric}
        className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        onChange={(e) => setNewOrgMetric(e.target.value)}
      />
      <div className="flex items-center justify-end mb-1">
        <button
          className="inline-block align-baseline font-bold text-lg bg-buttonBGLight text-buttonTextLight dark:bg-buttonBGDark dark:text-buttonTextDark p-2 rounded-lg hover:text-blue-800"
          onClick={() => {
            updateUserData(
              [
                "organizationFormat",
                "organizationTimeframe",
                "organizationMetrics",
              ],
              [newOrgFormat, newOrgTime, newOrgMetric]
            );
          }}
        >
          Update
        </button>
      </div>
    </>
  );
};

export default DesiredSolutionData;
