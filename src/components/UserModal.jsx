import { useState, useEffect } from "react";
import { useSnackbar } from "notistack";
import Spinner from "../components/Spinner";
import { useAuth } from "../hooks/useAuth";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { FaStopCircle } from "react-icons/fa";
import Tooltip from "./Tooltip";

const UserModal = ({ isOpen, closeModal }) => {
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const [userList, setUserList] = useState([]);
  const [toggleUpdate, setToggleUpdate] = useState(false);

  const getToken = async () => {
    let token = "";
    setLoading(true);
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
        setLoading(false);
        console.log(response);
        console.log("this is it: ", response.csrfToken);
        token = response.csrfToken;
      })
      .catch((error) => {
        console.log("error - ", error.message);
      });
    return token;
  };

  useEffect(() => {
    async function getList() {
      let token = await getToken();
      console.log("Getting list - Token: ", { token }.token);
      setLoading(true);
      //      let url = "http://localhost:3000";
      let url = "https://avn-ready-backend-app-hxiez.ondigitalocean.app"; // for production
      let headersList = {
        Accept: "*/*",
        "Content-Type": "application/x-www-form-urlencoded",
        "X-Csrf-Token": token,
      };
      await fetch(`${url}/accountList`, {
        method: "POST",
        credentials: "include", // to send HTTP only cookies
        headers: headersList,
      })
        .then((response) => response.json())
        .then((r) => {
          setLoading(false);
          let final = Array.from(r.data);
          final = final.sort();
          final.sort((a, b) => (a.ingredient > b.ingredient ? 1 : -1));
          setUserList(final);
          console.log(...final);
          setLoading(false);
        })
        .catch((error) => {
          console.log("error - ", error);
          setLoading(false);
        });
    }

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    });

    getList();
  }, [toggleUpdate]);

  const activateItem = (username) => {
    if (user.username != username) {
      console.log("activating.", username);
      updateStorage(username, "activate");
    }
  };

  const suspendItem = (username) => {
    if (user.username != username) {
      console.log("suspending.", username);
      updateStorage(username, "suspend");
    }
  };

  const upgradeItem = (username) => {
    if (user.username != username) {
      console.log("upgrading.", username);
      updateStorage(username, "upgrade");
    }
  };

  const downgradeItem = (username) => {
    if (user.username != username) {
      console.log("downgrading.", username);
      updateStorage(username, "downgrade");
    }
  };

  async function updateStorage(username, action) {
    setLoading(true);
    let token = await getToken();
    console.log("token: ", token);
    //    let url = "http://localhost:3000";
    let url = "https://avn-ready-backend-app-hxiez.ondigitalocean.app"; // for production
    url += "/modifylist";
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
      "X-Csrf-Token": token,
    };
    console.log(`About to ${action} ${username}`);
    await fetch(`${url}`, {
      method: "POST",
      credentials: "include", // to send HTTP only cookies
      headers: headersList,
      body: JSON.stringify({ username: username, action: action }),
    })
      .then((response) => response.json())
      .then((r) => {
        enqueueSnackbar("Action successful", { variant: "success" });
        setToggleUpdate(!toggleUpdate);
        console.log("It should have upgraded and reloaded db.");
        setLoading(false);
      })
      .catch((error) => {
        enqueueSnackbar("Error updating", { variant: "error" });
        console.log("error - ", error);
        setLoading(false);
      });
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-30">
      {loading ? <Spinner /> : <></>}

      <div className="fixed inset-10 z-50 rounded-lg shadow-lg flex items-center justify-center bg-white/90 dark:bg-black/90">
        <div className="relative w-full h-full text-black dark:text-white rounded-lg shadow-lg">
          <div className="absolute top-0 right-0 mt-5 mr-5">
            <button
              onClick={closeModal}
              className="text-tron-black dark:text-tron-cyan text-4xl"
            >
              &times;
            </button>
          </div>
          <div className="m-5">
            <div>Modify User Info </div>
          </div>
          <div className="text-center text-xl font-bold m-5">Users:</div>
          <div className="grid grid-cols-11 text-center mx-5">
            <div className="col-span-2 m-1 font-bold">
              {"Username".padEnd(25, " ")}
            </div>
            <div className="col-span-3 m-1 font-bold">
              {"Email address".padEnd(15, " ")}
            </div>
            <div className="col-span-1 m-1 font-bold">
              {"Privileges".padEnd(5, " ")}
            </div>
            <div className="col-span-1 m-1 font-bold">
              {"Upgrade".padEnd(15, " ")}
            </div>
            <div className="col-span-1 m-1 font-bold">
              {"Downgrade".padEnd(15, " ")}
            </div>
            <div className="col-span-1 m-1 font-bold">
              {"Status".padEnd(15, " ")}
            </div>
            <div className="col-span-1 m-1 font-bold">
              {"Activate".padEnd(15, " ")}
            </div>
            <div className="col-span-1 m-1 font-bold">
              {"Suspend".padEnd(15, " ")}
            </div>
          </div>

          <div className="text-center">
            {userList.map((item, index) => (
              <div
                key={index}
                value={item}
                className="grid grid-cols-11 text-center mx-5"
              >
                <div className="col-span-2 m-1">
                  {item.username.toString().padEnd(25, " ")}
                </div>
                <div className="col-span-3 m-1">
                  {item.email.toString().padEnd(15, " ")}
                </div>
                <div className="col-span-1 m-1">
                  {item.privileges.toString().padEnd(5, " ")}
                </div>
                <div className="col-span-1 m-1">
                  <Tooltip message={"Upgrade to Admin"} posit={"below"}>
                    <button
                      className="mx-auto relative rounded-full px-3 py-1 text-sm leading-6 text-tron-black ring-1 ring-tron-cyan hover:bg-tron-cyan-hover"
                      onClick={() => upgradeItem(item.username)}
                    >
                      <FaArrowUp className="text-tron-black dark:text-tron-medium-grey" />
                    </button>
                  </Tooltip>
                </div>
                <div className="col-span-1 m-1">
                  <Tooltip message={"Downgrade to Basic"} posit={"below"}>
                    <button
                      className="mx-auto relative rounded-full px-3 py-1 text-sm leading-6 text-tron-black ring-1 ring-tron-cyan hover:bg-tron-cyan-hover"
                      onClick={() => downgradeItem(item.username)}
                    >
                      <FaArrowDown className="text-tron-black dark:text-tron-medium-grey" />
                    </button>
                  </Tooltip>
                </div>{" "}
                <div className="col-span-1 m-1">
                  {item.status.toString().padEnd(5, " ")}
                </div>
                <div className="col-span-1 m-1">
                  <Tooltip message={"Activate"} posit={"below"}>
                    <button
                      className="mx-auto relative rounded-full px-3 py-1 text-sm leading-6 text-tron-black ring-1 ring-tron-cyan hover:bg-tron-cyan-hover"
                      onClick={() => activateItem(item.username)}
                    >
                      <FaPlayCircle className="text-tron-black dark:text-tron-medium-grey" />
                    </button>
                  </Tooltip>
                </div>
                <div className="col-span-1 m-1">
                  <Tooltip message={"Suspend"} posit={"below"}>
                    <button
                      className="mx-auto relative rounded-full px-3 py-1 text-sm leading-6 text-tron-black ring-1 ring-tron-cyan hover:bg-tron-cyan-hover"
                      onClick={() => suspendItem(item.username)}
                    >
                      <FaStopCircle className="text-tron-black dark:text-tron-medium-grey" />
                    </button>
                  </Tooltip>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-0 right-0 mt-5 mr-5">
            <button
              onClick={closeModal}
              className="m-5 text-tron-black dark:text-tron-cyan text-lg"
            >
              ESC
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
