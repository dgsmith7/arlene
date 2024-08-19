import { useState } from "react";
import { useAccountData } from "../hooks/useAccountData";

const GeneralInformationData = () => {
  const { userData, updateUserData } = useAccountData();
  const [newOrgDesc, setNewOrgDesc] = useState(
    userData.organizationDescription
  );
  const [newOrgPrime, setNewOrgPrime] = useState(
    userData.organizationPrimaries
  );
  const [newOrgComments, setNewOrgComments] = useState(
    userData.organizationAdditionalComments
  );
  return (
    <>
      <div>
        <label
          htmlFor="description"
          className="flex justify-start block text-textLight dark:text-textDark text-base font-bold m-2"
        >
          Please provide a brief description of your organization and its
          mission.
        </label>
        <input
          type="text"
          name="description"
          id="description"
          value={newOrgDesc}
          className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setNewOrgDesc(e.target.value)}
        />
      </div>
      <div>
        <label
          htmlFor="primaryUsers"
          className="flex justify-start block text-textLight dark:text-textDark text-base font-bold m-2"
        >
          Who will be the primary users of this optimization solution?
        </label>
        <input
          type="text"
          name="primaryUsers"
          id="primaryUsers"
          value={newOrgPrime}
          className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setNewOrgPrime(e.target.value)}
        />
      </div>
      <div>
        <label
          htmlFor="comments"
          className="flex justify-start block text-textLight dark:text-textDark text-base font-bold m-2"
        >
          Are there any additional comments or information you believe is
          crucial for solving this problem?
        </label>
        <input
          type="text"
          name="comments"
          id="comments"
          value={newOrgComments}
          className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setNewOrgComments(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-end mb-1">
        <button
          className="inline-block align-baseline font-bold text-lg bg-buttonBGLight text-buttonTextLight dark:bg-buttonBGDark dark:text-buttonTextDark p-2 rounded-lg hover:text-blue-800"
          onClick={() => {
            updateUserData(
              [
                "organizationDescription",
                "organizationPrimaries",
                "organizationAdditionalComments",
              ],
              [newOrgDesc, newOrgPrime, newOrgComments]
            );
          }}
        >
          Update
        </button>
      </div>
    </>
  );
};

export default GeneralInformationData;
