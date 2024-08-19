import { useState, useEffect } from "react";
import { useSnackbar } from "notistack";
import Spinner from "../components/Spinner";
import { useAuth } from "../hooks/useAuth";
import { useAccountData } from "../hooks/useAccountData";
import UserModal from "../components/UserModal";

const IndivUserData = () => {
  const [userModalOpen, setUserModalOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [newEmail, setNewEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const { userData, avatar, email } = useAccountData();
  const [newUsername, setNewUsername] = useState("");
  const [newFirst, setNewFirst] = useState("");
  const [newLast, setNewLast] = useState("");
  const [newAvatar, setNewAvatar] = useState("");

  const openModal = () => {
    document.body.style.overflow = "hidden";
    setUserModalOpen(true);
  };

  const closeModal = () => {
    document.body.style.overflow = "unset";
    setUserModalOpen(false);
  };

  function formatDate(dateString) {
    return `${dateString.substring(4, 6)}/${dateString.substring(
      6,
      8
    )}/${dateString.substring(0, 4)}`;
  }

  useEffect(() => {
    setNewUsername(user.username);
    setNewEmail(email);
    setNewFirst(userData.firstName);
    setNewLast(userData.lastName);
    // setNewAvatar(userData.avatarChoice);
    setNewAvatar("unnamed");
  });

  return (
    <div>
      {/*********** Spinner */}
      <div>
        {loading ? (
          <div className="fixed inset-0 z-30">
            <Spinner />
          </div>
        ) : (
          <div></div>
        )}
      </div>

      <div className="flex justify-center">
        {/*  Profile card
         */}
        <img
          className="lg:h-64 lg:w-64 flex-none bg-cover rounded-l-lg overflow-hidden"
          src={avatar}
        ></img>
        <div className="rounded-r-lg bg-white p-4 flex flex-col">
          <div className="mb-2 just">
            <div className="text-gray-900 font-bold text-base mb-2">
              Name: {userData.firstName + " " + userData.lastName}
            </div>
            <div className="text-gray-900 font-bold text-base mb-2">
              Email: {email}
            </div>
            <div className="text-gray-900 font-bold text-base mb-2">
              Username: {user.username}
            </div>
            <div className="text-gray-900 font-bold text-base mb-2">
              Subscription: {userData.plan}, expires{" "}
              {formatDate(userData.expires)}{" "}
            </div>
          </div>
          <div className="flex text-black justify-evenly">
            {/*********** Admin priv links */}

            {user.privileges == "Admin" ? (
              <div className="font-bold text-sm text-center rounded-md">
                <UserModal isOpen={userModalOpen} closeModal={closeModal} />
                <p className="m-2">Access your Admin privileges:</p>
                <button
                  className="p-1 text-black text-base hover:text-blue-800 border border-black rounded-md"
                  //className="m-1 inline-block align-baseline font-bold text-lg text-textLight dark:text-textDark hover:text-blue-800 border border-textLight dark:border-textDark p-1 rounded-md opacity-50 cursor-not-allowed"
                  onClick={() => {
                    openModal();
                  }}
                  tabIndex={0}
                >
                  View User List
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndivUserData;
