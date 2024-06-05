import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Capture = ({ onQueryChange }) => {
  const [scopeParams, setScopeParams] = useState([]);
  // onChange={(e) => setProblem(e.target.value)}

  const updateScope = (title, val) => {
    setScopeParams(
      scopeParams.map((item) => {
        if (item.title == title) {
          return { title: title, val: val };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <div className="p-4 bg-white text-bacon_black-700 dark:bg-bacon_black-700 dark:text-white">
      <div>
        <div className="flex items-center justify-center p-12">
          <div className="mx-auto w-full max-w-[550px]">
            <form
              className="bg-gray-500 shadow-2xl rounded px-8 pt-4 pb-4 mb-2"
              onSubmit={(e) => {
                updateScope();
                console.log("submitted");
                onQueryChange(e, scope.toString());
              }}
            >
              {/* {scopeParams.forEach((item) => {
                console.log(item);
              })} */}
              <div>OBJECTIVES</div>
              <div className="mb-2">
                <div className="block text-sm font-bold mb-2">
                  What is the primary objecive of your optimization?
                </div>
                <label
                  htmlFor="costs"
                  className="block text-black text-sm font-bold mb-2"
                >
                  <input
                    type="radio"
                    name="objective"
                    id="costs"
                    value="costs"
                    //className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  Minimize maintenance costs
                </label>
                <label
                  htmlFor="readiness"
                  className="block text-black text-sm font-bold mb-2"
                >
                  <input
                    type="radio"
                    name="objective"
                    id="readiness"
                    value="readiness"
                    //                    className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  Maximize operational readiness
                </label>
                <label
                  htmlFor="downtime"
                  className="block text-black text-sm font-bold mb-2"
                >
                  <input
                    type="radio"
                    name="objective"
                    id="downtime"
                    value="downtime"
                    //                   className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  Minimize downtime
                </label>
                <label
                  htmlFor="otherObjective"
                  className="block text-black text-sm font-bold mb-2"
                >
                  <input
                    type="radio"
                    name="objective"
                    id="otherObjective"
                    value="otherObjective"
                    //                  className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <span>
                    Other
                    <input
                      type="text"
                      name="otherObjectiveText"
                      id="otherObjectiveText"
                      placeholder="Please specify"
                      className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </span>
                </label>
              </div>
              <div className="mb-2">
                <label
                  htmlFor="secondaryObjective"
                  className="block text-black text-sm font-bold mb-2"
                >
                  If you have any secondary objectives, please specify them
                  below.
                </label>
                <input
                  type="text"
                  name="secondaryObjective"
                  id="secondaryObjective"
                  placeholder="Please specify"
                  className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={(e) => {
                    setScopeParams({ secondaryObjective: e.target.value });
                  }}
                />
              </div>
              <div>CONSTRAINTS</div>
              <div className="mb-2">
                <div className="block text-sm font-bold mb-2">
                  What are the key constraints that need to be considered?
                </div>
                <label
                  htmlFor="budget"
                  className="block text-black text-sm font-bold mb-2"
                >
                  <input
                    type="radio"
                    name="constraints"
                    id="budget"
                    value="budget"
                    //className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  Budget limitations
                </label>
                <label
                  htmlFor="mxTime"
                  className="block text-black text-sm font-bold mb-2"
                >
                  <input
                    type="radio"
                    name="constraints"
                    id="mxTime"
                    value="mxTime"
                    //                    className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  Maintenance time constraints
                </label>
                <label
                  htmlFor="numAircraftAvail"
                  className="block text-black text-sm font-bold mb-2"
                >
                  <input
                    type="radio"
                    name="constraints"
                    id="numAircraftAvail"
                    value="numAircraftAvail"
                    //                   className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  Number of available aircraft
                </label>
                <label
                  htmlFor="flightHours"
                  className="block text-black text-sm font-bold mb-2"
                >
                  <input
                    type="radio"
                    name="constraints"
                    id="flightHours"
                    value="flightHours"
                    //                    className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  Flight hours limits
                </label>
                <label
                  htmlFor="personnel"
                  className="block text-black text-sm font-bold mb-2"
                >
                  <input
                    type="radio"
                    name="constraints"
                    id="personnel"
                    value="personnel"
                    //                    className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  Personnel
                </label>
                <label
                  htmlFor="otherConstraint"
                  className="block text-black text-sm font-bold mb-2"
                >
                  <input
                    type="radio"
                    name="constraints"
                    id="otherConstraint"
                    value="otherConstraint"
                    //                  className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <span>
                    {"   "} Other
                    <input
                      type="text"
                      name="otherConstraintText"
                      id="otherConstraintText"
                      placeholder="Please specify"
                      className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </span>
                </label>
              </div>
              <div className="mb-2">
                <label
                  htmlFor="compliance"
                  className="block text-black text-sm font-bold mb-2"
                >
                  Are there any specific regulations or compliance requirements
                  that must be met?
                </label>
                <input
                  type="text"
                  name="compliance"
                  id="compliance"
                  placeholder="Please specify"
                  className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="opsContraints"
                  className="block text-black text-sm font-bold mb-2"
                >
                  What are the operational constraints (e.g., mission duration,
                  distance, etc.)?
                </label>
                <input
                  type="text"
                  name="opsContraints"
                  id="opsContraints"
                  placeholder="Please specify"
                  className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>KNOWN RELEVANT DATA</div>
              <div className="block text-sm font-bold mb-2">
                Please provide the following details for your aircraft fleet:
              </div>
              <div>
                <label
                  htmlFor="totalSystems"
                  className="block text-black text-sm font-bold mb-2"
                >
                  Total number of systems (aircraft)
                </label>
                <input
                  type="text"
                  name="totalSystems"
                  id="totalSystems"
                  className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label
                  htmlFor="systemTypes"
                  className="block text-black text-sm font-bold mb-2"
                >
                  System types and their specific characteristics
                </label>
                <input
                  type="text"
                  name="systemTypes"
                  id="systemTypes"
                  className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label
                  htmlFor="mbtf"
                  className="block text-black text-sm font-bold mb-2"
                >
                  MTBF (Mean Time Between Failures) for system and known
                  subsystems
                </label>
                <input
                  type="text"
                  name="mbtf"
                  id="mbtf"
                  className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label
                  htmlFor="avgOpHrs"
                  className="block text-black text-sm font-bold mb-2"
                >
                  Average operational hours per month per system
                </label>
                <input
                  type="text"
                  name="avgOpHrs"
                  id="avgOpHrs"
                  className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="block text-sm font-bold mb-2">
                Provide details on the maintenance schedules and durations:
              </div>
              <div>
                <label
                  htmlFor="mxIntervals"
                  className="block text-black text-sm font-bold mb-2"
                >
                  Scheduled maintenance intervals
                </label>
                <input
                  type="text"
                  name="mxIntervals"
                  id="mxIntervals"
                  className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label
                  htmlFor="turnAround"
                  className="block text-black text-sm font-bold mb-2"
                >
                  Turn-around time for depot-level maintenance
                </label>
                <input
                  type="text"
                  name="turnAround"
                  id="turnAround"
                  className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label
                  htmlFor="recentChanges"
                  className="block text-black text-sm font-bold mb-2"
                >
                  Any recent changes to maintenance protocols
                </label>
                <input
                  type="text"
                  name="recentChanges"
                  id="recentChanges"
                  className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label
                  htmlFor="perfData"
                  className="block text-black text-sm font-bold mb-2"
                >
                  What is the historical performance data for the fleet (failure
                  rates, maintenance records, etc.)?
                </label>
                <input
                  type="text"
                  name="perfData"
                  id="perfData"
                  className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div>TYPE OF OPTIMIZATION REQUESTS</div>
              <div className="mb-2">
                <div className="block text-sm font-bold mb-2">
                  What type of optimization are you looking to perform?
                </div>
                <label
                  htmlFor="schedOptim"
                  className="block text-black text-sm font-bold mb-2"
                >
                  <input
                    type="radio"
                    name="optimazation"
                    id="schedOptim"
                    value="schedOptim"
                    //className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  Scheduling optimization
                </label>
                <label
                  htmlFor="rsrcAlloc"
                  className="block text-black text-sm font-bold mb-2"
                >
                  <input
                    type="radio"
                    name="optimazation"
                    id="rsrcAlloc"
                    value="rsrcAlloc"
                    //                    className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  Resource allocation
                </label>
                <label
                  htmlFor="routeOptim"
                  className="block text-black text-sm font-bold mb-2"
                >
                  <input
                    type="radio"
                    name="optimazation"
                    id="routeOptim"
                    value="routeOptim"
                    //                   className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  Route optimization
                </label>
                <label
                  htmlFor="inventoryMgmt"
                  className="block text-black text-sm font-bold mb-2"
                >
                  <input
                    type="radio"
                    name="optimazation"
                    id="inventoryMgmt"
                    value="inventoryMgmt"
                    //                    className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  Inventory management
                </label>
                <label
                  htmlFor="riskMitig"
                  className="block text-black text-sm font-bold mb-2"
                >
                  <input
                    type="radio"
                    name="optimazation"
                    id="riskMitig"
                    value="riskMitig"
                    //                    className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  Risk assessment and mitigation
                </label>
                <label
                  htmlFor="otherOptim"
                  className="block text-black text-sm font-bold mb-2"
                >
                  <input
                    type="radio"
                    name="optimazation"
                    id="otherOptim"
                    value="otherOptim"
                    //                  className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <span>
                    {"   "} Other
                    <input
                      type="text"
                      name="otherOptimText"
                      id="otherOptimText"
                      placeholder="Please specify"
                      className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </span>
                </label>
              </div>

              <div>ADDITIONAL QUESTIONS</div>

              <div>
                <label
                  htmlFor="approach"
                  className="block text-black text-sm font-bold mb-2"
                >
                  Do you have any specific preferences for the optimization
                  approach (e.g., linear programming, simulation, heuristic
                  methods, etc.)?
                </label>
                <input
                  type="text"
                  name="approach"
                  id="approach"
                  className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label
                  htmlFor="uncertainties"
                  className="block text-black text-sm font-bold mb-2"
                >
                  Are there any uncertainties or variables that need special
                  consideration (e.g., weather conditions, unexpected mission
                  changes)?
                </label>
                <input
                  type="text"
                  name="uncertainties"
                  id="uncertainties"
                  className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label
                  htmlFor="realTime"
                  className="block text-black text-sm font-bold mb-2"
                >
                  Do you have access to real-time data or is the data static?
                </label>
                <input
                  type="text"
                  name="realTime"
                  id="realTime"
                  className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label
                  htmlFor="stakeHolders"
                  className="block text-black text-sm font-bold mb-2"
                >
                  Are there any stakeholder preferences or priorities that need
                  to be factored into the solution?
                </label>
                <input
                  type="text"
                  name="stakeHolders"
                  id="stakeHolders"
                  className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              <div>DESIRED SOLUTION</div>

              <div className="block text-sm font-bold mb-2">
                What format do you expect the final solution to be in?
              </div>
              <label
                htmlFor="report"
                className="block text-black text-sm font-bold mb-2"
              >
                <input
                  type="radio"
                  name="solution"
                  id="report"
                  value="report"
                  //className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
                Detailed report
              </label>
              <label
                htmlFor="Dashboard"
                className="block text-black text-sm font-bold mb-2"
              >
                <input
                  type="radio"
                  name="solution"
                  id="Dashboard"
                  value="Dashboard"
                  //                    className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
                Dashboard with visualizations
              </label>
              <label
                htmlFor="steps"
                className="block text-black text-sm font-bold mb-2"
              >
                <input
                  type="radio"
                  name="solution"
                  id="steps"
                  value="steps"
                  //                   className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
                Actionable steps and recommendations
              </label>
              <label
                htmlFor="chart"
                className="block text-black text-sm font-bold mb-2"
              >
                <input
                  type="radio"
                  name="solution"
                  id="chart"
                  value="chart"
                  //                   className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
                Timeline chart or workflow chart
              </label>
              <label
                htmlFor="otherFormat"
                className="block text-black text-sm font-bold mb-2"
              >
                <input
                  type="radio"
                  name="solution"
                  id="otherFormat"
                  value="otherFormat"
                  //                  className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
                <span>
                  Other
                  <input
                    type="text"
                    name="otherFormatText"
                    id="otherFormatText"
                    placeholder="Please specify"
                    className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </span>
              </label>

              <div>GENERAL INFORMATION</div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-black text-sm font-bold mb-2"
                >
                  Please provide a brief description of your organization and
                  its mission.
                </label>
                <input
                  type="text"
                  name="description"
                  id="description"
                  className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label
                  htmlFor="primaryUsers"
                  className="block text-black text-sm font-bold mb-2"
                >
                  Who will be the primary users of this optimization solution?
                </label>
                <input
                  type="text"
                  name="primaryUsers"
                  id="primaryUsers"
                  className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label
                  htmlFor="comments"
                  className="block text-black text-sm font-bold mb-2"
                >
                  Are there any additional comments or information you believe
                  is crucial for solving this problem?
                </label>
                <input
                  type="text"
                  name="comments"
                  id="comments"
                  className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

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
              {/* <div className="mb-5">
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
              </div> */}
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

export default Capture;
