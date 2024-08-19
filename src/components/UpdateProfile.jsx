import { useState, useEffect } from "react";
import { useSnackbar } from "notistack";
import Spinner from "../components/Spinner";
import { useAuth } from "../hooks/useAuth";
import { useAccountData } from "../hooks/useAccountData";
import { NavLink } from "react-router-dom";
import Engineer from "../assets/engineer.jpg";
import Pilot from "../assets/pilot.jpg";
import Analyst from "../assets/analyst.jpg";
import Mechanic from "../assets/mechanic.jpg";
import Logistician from "../assets/logistician.jpg";
import Unnamed from "../assets/unnamed.jpg";
import Tooltip from "./Tooltip";
import { useNavigate } from "react-router";

const UpdateProfile = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const { user, updateEmail } = useAuth();
  const { userData, avatar, email, updateUserData } = useAccountData();
  //  const [newUsername, setNewUsername] = useState("");
  const [newEmail, setNewEmail] = useState(email);
  const [newFirst, setNewFirst] = useState(userData.firstName);
  const [newLast, setNewLast] = useState(userData.lastName);
  const [newAvatar, setNewAvatar] = useState(avatar);
  const navigate = useNavigate();

  const handleUpdateAvatar = async () => {
    console.log("This will update the avatar in the DB");
    let avatarString = newAvatar.split("/")[3].split(".")[0];
    await updateUserData(["avatarChoice"], [avatarString]);
    location.reload(true);
  };

  // const handleUpdateEmail = async () => {
  //   console.log("This will update the email in the DB");
  //   await updateEmail(newEmail);
  //   //location.reload(true);
  // };

  // const handleUpdateUsername = () => {
  //   console.log("This will update the username in the DB");
  // };

  const handleUpdateNames = async () => {
    console.log("This will update the names in the DB");
    await updateUserData(["firstName", "lastName"], [newFirst, newLast]);
    location.reload(true);
  };

  const handleManageSubscription = () => {
    console.log("This will go to the subscription page.");
  };

  const getToken = async () => {
    console.log("getting token...");
    let token = "";
    //     setLoading(true);
    //    let url = "http://localhost:3000";
    let url = "https://avn-ready-backend-app-hxiez.ondigitalocean.app"; // for production
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/x-www-form-urlencoded",
    };
    await fetch(`${url}/getcsrf`, {
      method: "POST",
      credentials: "include", // to send HTTP only cookies
      headers: headersList,
    })
      .then((response) => response.json())
      .then((response) => {
        //        setLoading(false);
        // console.log(response);
        console.log("this is it: ", response.csrfToken);
        token = response.csrfToken;
      })
      .catch((error) => {
        console.log("error - ", error.message);
      });
    return token;
  };

  useEffect(() => {
    //    setNewUsername(user.username);
    // setNewEmail(email);
    // setNewFirst(userData.firstName);
    // setNewLast(userData.lastName);
  }, []);

  return (
    <div>
      <div id="update-avatar" className="rounded-lg">
        <div className="m-5 columns-2 flex justify-center">
          <div className="columns-1 m-5">
            <div className="m-3">Preview:</div>
            <div className="flex justify-center">
              <img className="h-36 rounded-lg" src={newAvatar}></img>
            </div>
          </div>
          <div className="columns-1 m-5">
            <div className="m-3 align-middle">Options:</div>
            <div className="flex justify-center">
              <label
                htmlFor="pilot"
                className="block text-black text-sm font-bold m-2 mx-1"
              >
                <input
                  type="radio"
                  name="avatar"
                  id="pilot"
                  value="pilot"
                  checked={newAvatar == Pilot}
                  //                    className="bg-white text-black shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={() => setNewAvatar(Pilot)}
                />
                <Tooltip message={"Pilot"} posit="below">
                  <img className="h-10 rounded-lg" src={Pilot}></img>
                </Tooltip>
              </label>
              <label
                htmlFor="engineer"
                className="block text-black text-sm font-bold m-2 mx-1"
              >
                <input
                  type="radio"
                  name="avatar"
                  id="engineer"
                  value="engineer"
                  checked={newAvatar == Engineer}
                  onChange={() => setNewAvatar(Engineer)}
                />
                <Tooltip message={"Engineer"} posit="below">
                  <img className="h-10 rounded-lg" src={Engineer}></img>
                </Tooltip>
              </label>
              <label
                htmlFor="mechanic"
                className="block text-black text-sm font-bold m-2 mx-1"
              >
                <input
                  type="radio"
                  name="avatar"
                  id="mechanic"
                  value="mechanic"
                  checked={newAvatar == Mechanic}
                  onChange={() => setNewAvatar(Mechanic)}
                />
                <Tooltip message={"Mechanic"} posit="below">
                  <img className="h-10 rounded-lg" src={Mechanic}></img>
                </Tooltip>
              </label>
              <label
                htmlFor="analyst"
                className="block text-black text-sm font-bold m-2 mx-1"
              >
                <input
                  type="radio"
                  name="avatar"
                  id="analyst"
                  value="analyst"
                  checked={newAvatar == Analyst}
                  onChange={() => setNewAvatar(Analyst)}
                />
                <Tooltip message={"Analyst"} posit="below">
                  <img className="h-10 rounded-lg" src={Analyst}></img>
                </Tooltip>
              </label>
              <label
                htmlFor="logisitican"
                className="block text-black text-sm font-bold m-2 mx-1"
              >
                <input
                  type="radio"
                  name="avatar"
                  id="logisitican"
                  value="logisitican"
                  checked={newAvatar == Logistician}
                  onChange={() => setNewAvatar(Logistician)}
                />
                <Tooltip message={"Logistician"} posit="below">
                  <img className="h-10 rounded-lg" src={Logistician}></img>
                </Tooltip>
              </label>
              <label
                htmlFor="unnamed"
                className="block text-black text-sm font-bold m-2 mx-1"
              >
                <input
                  type="radio"
                  name="avatar"
                  id="unnamed"
                  value="unnamed"
                  checked={newAvatar == Unnamed}
                  onChange={() => setNewAvatar(Unnamed)}
                />
                <Tooltip message={"Anonymous"} posit="below">
                  <img className="h-10 rounded-lg" src={Unnamed}></img>
                </Tooltip>
              </label>
            </div>
            <div className="m-2">Current avatar: {userData.avatarChoice}</div>
            <div>
              <button
                className="m-1 font-bold text-lg text-textLight dark:text-textDark hover:text-blue-800 border border-black p-1 rounded-md"
                onClick={() => {
                  handleUpdateAvatar();
                }}
                tabIndex={0}
              >
                Update Profile Avatar
              </button>
            </div>
          </div>
        </div>
        {/* <div className="columns-1 flex justify-center m-3">
            <div className="m-2">
              {" "}
              <label
                className="text-textLight dark:text-textDark"
                htmlFor="username"
              >
                Username:
              </label>
            </div>
            <div className="m-2">
              {" "}
              <input
                className="shadow appearance-none border dark:border-textDark rounded py-2 px-3 text-black dark:text-black leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                value={newUsername}
                tabIndex={0}
                placeholder="Username"
                onChange={(e) => setNewUsername(e.target.value)}
              />
            </div>
            <div className="m-2">
              <button
                className="font-bold text-lg text-textLight dark:text-textDark hover:text-blue-800 border border-black p-1 rounded-md"
                //className="m-1 inline-block align-baseline font-bold text-lg text-textLight dark:text-textDark hover:text-blue-800 border border-textLight dark:border-textDark p-1 rounded-md opacity-50 cursor-not-allowed"
                onClick={() => {
                  handleUpdateUsername();
                }}
                tabIndex={0}
              >
                Update username
              </button>
            </div>
          </div> */}
        {/* <div className="columns-1 flex justify-center m-3">
            <div className="m-2">
              {" "}
              <label
                className="block text-textLight dark:text-textDark"
                htmlFor="email"
              >
                Email Address
              </label>
            </div>
            <div className="m-2">
              {" "}
              <input
                className="shadow appearance-none border dark:border-textDark rounded py-2 px-3 text-black dark:text-black leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                tabIndex={0}
                placeholder="you@example.com"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />{" "}
            </div>
            <div className="m-2">
              <button
                className="font-bold text-lg text-textLight dark:text-textDark hover:text-blue-800 border border-black p-1 rounded-md"
                //className="m-1 inline-block align-baseline font-bold text-lg text-textLight dark:text-textDark hover:text-blue-800 border border-textLight dark:border-textDark p-1 rounded-md opacity-50 cursor-not-allowed"
                onClick={() => {
                  handleUpdateEmail();
                }}
                tabIndex={0}
              >
                Update email
              </button>{" "}
            </div>
          </div> */}
        <div className="columns-1 flex justify-center m-3">
          <div className="m-2">
            {" "}
            <label
              className="text-textLight dark:text-textDark text-sm font-bold"
              htmlFor="first"
            >
              First name
            </label>{" "}
          </div>
          <div className="m-2">
            {" "}
            <input
              className="shadow appearance-none border dark:border-textDark rounded py-2 px-3 text-black dark:text-black leading-tight focus:outline-none focus:shadow-outline"
              id="first"
              type="text"
              tabIndex={0}
              placeholder="First name"
              value={newFirst}
              onChange={(e) => setNewFirst(e.target.value)}
            />
          </div>
          <div className="m-2">
            {" "}
            <label
              className="text-textLight dark:text-textDark text-sm font-bold"
              htmlFor="last"
            >
              Last name
            </label>{" "}
          </div>
          <div className="m-2">
            {" "}
            <input
              className="shadow appearance-none border dark:border-textDark rounded py-2 px-3 text-black dark:text-black leading-tight focus:outline-none focus:shadow-outline"
              id="last"
              type="text"
              tabIndex={0}
              placeholder="Last name"
              value={newLast}
              onChange={(e) => setNewLast(e.target.value)}
            />{" "}
          </div>
          <div className="m-2">
            <button
              className="font-bold text-lg text-textLight dark:text-textDark hover:text-blue-800 border border-black p-1 rounded-md"
              //className="m-1 inline-block align-baseline font-bold text-lg text-textLight dark:text-textDark hover:text-blue-800 border border-textLight dark:border-textDark p-1 rounded-md opacity-50 cursor-not-allowed"
              onClick={() => {
                handleUpdateNames();
              }}
              tabIndex={0}
            >
              Update Names
            </button>
          </div>
        </div>
        <div className="columns-1 flex justify-center m-3">
          {" "}
          <button
            className="font-bold text-lg text-textLight dark:text-textDark hover:text-blue-800 border border-black p-1 rounded-md"
            //className="m-1 inline-block align-baseline font-bold text-lg text-textLight dark:text-textDark hover:text-blue-800 border border-textLight dark:border-textDark p-1 rounded-md opacity-50 cursor-not-allowed"
            onClick={() => {
              handleManageSubscription();
            }}
            tabIndex={0}
          >
            Manage Subscription
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
