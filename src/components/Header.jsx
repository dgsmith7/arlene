import { useState, useEffect } from "react";
import { FaHelicopterSymbol } from "react-icons/fa6";
import { FaDoorOpen, FaDoorClosed } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BsInfoCircle } from "react-icons/bs";
import { IoMdChatboxes } from "react-icons/io";
import Tooltip from "./Tooltip";
import DarkModeButton from "./DarkModeButton";
import { NavLink } from "react-router-dom";
//import { useAuth } from "../hooks/useAuth";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { useAccountData } from "../hooks/useAccountData";

const Header = () => {
  const { user, isAuthenticated } = useAuth0();
  const { avatar, userData } = useAccountData();
  const [needsUpdate, setNeedsUpdate] = useState("false");

  useEffect(() => {
    if (userData) setNeedsUpdate(userData.scopeNeedsUpdate.toString());
  }, [userData]);

  return (
    <div className="z-10 fixed top-0 left-0 right-0">
      <nav className="flex justify-between px-20 py-5 items-center bg-headerLight dark:bg-headerDark text-textLight dark:text-textDark">
        <div className="text-center">
          <NavLink
            to={"/"}
            className="m-2 inline-block align-baseline font-bold text-sm text-buttonTextLight dark:text-buttonTextDark hover:text-blue-800 p-1 rounded-md"
          >
            <h1 className="text-xl text-black dark:text-white font-bold">
              <Tooltip message={"Home"} posit="below">
                <FaHelicopterSymbol className="size-7" />
              </Tooltip>
            </h1>
          </NavLink>
        </div>
        <div className="flex items-center">
          <ul className="flex items-center space-x-6">
            <li className="font-semibold text-black dark:text-white">
              <Tooltip message={"Dark Mode"} posit={"below"}>
                <DarkModeButton className="size-7" />
              </Tooltip>
            </li>

            <li className="font-semibold text-black dark:text-white">
              <div className="text-center">
                <NavLink
                  to="/chatpage"
                  state={{
                    needsUpdate: needsUpdate,
                  }}
                  className="m-2 inline-block align-baseline font-bold text-sm text-buttonTextLight dark:text-buttonTextDark hover:text-blue-800 p-1 rounded-md"
                >
                  <h1 className="text-xl text-black dark:text-white font-bold">
                    <Tooltip message={"Chat with Arlene"} posit={"below"}>
                      <IoMdChatboxes className="size-7" />
                    </Tooltip>
                  </h1>
                </NavLink>
              </div>
            </li>

            <li className="font-semibold text-black dark:text-white">
              <div className="text-center">
                <NavLink
                  to={"/about"}
                  className="m-2 inline-block align-baseline font-bold text-sm text-buttonTextLight dark:text-buttonTextDark hover:text-blue-800 p-1 rounded-md"
                >
                  <h1 className="text-xl text-black dark:text-white font-bold">
                    <Tooltip message={"About"} posit={"below"}>
                      <BsInfoCircle className="size-7" />
                    </Tooltip>
                  </h1>
                </NavLink>
              </div>
            </li>

            <li className="font-semibold text-black dark:text-white">
              <div className="text-center">
                <NavLink
                  to={"/profile"}
                  className="m-2 inline-block align-baseline font-bold text-sm text-buttonTextLight dark:text-buttonTextDark hover:text-blue-800 p-1 rounded-md"
                >
                  <h1 className="text-xl text-black dark:text-white font-bold">
                    <Tooltip message={"Profile"} posit={"below"}>
                      {/*user*/isAuthenticated ? (
                        <>
                          <img
                            className="mr-1 w-7 h-7 rounded"
                            src={avatar}
                          ></img>
                          {user.name/* {user.username} */}
                        </>
                      ) : (
                        <CgProfile className="size-7" />
                      )}
                    </Tooltip>
                  </h1>
                </NavLink>
              </div>
            </li>

            <li className="font-semibold text-black dark:text-white">
              <div className="text-center">
                <NavLink
                  to={"/login"}
                  className="m-2 inline-block align-baseline font-bold text-sm text-buttonTextLight dark:text-buttonTextDark hover:text-blue-800 p-1 rounded-md"
                >
                  <h1 className="text-xl text-black dark:text-white font-bold">
                    <Tooltip message={"Login/Signup"} posit={"below"}>
                      <FaDoorOpen className="size-7" />
                    </Tooltip>
                  </h1>
                </NavLink>{" "}
              </div>
            </li>

            <li className="font-semibold text-black dark:text-white">
              <div className="text-center">
                <NavLink
                  to={"/logout"}
                  className="m-2 inline-block align-baseline font-bold text-sm text-buttonTextLight dark:text-buttonTextDark hover:text-blue-800 p-1 rounded-md"
                >
                  <h1 className="text-xl text-black dark:text-white font-bold">
                    <Tooltip message={"Logout"} posit={"below"}>
                      <FaDoorClosed className="size-7" />
                    </Tooltip>
                  </h1>
                </NavLink>{" "}
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <div className="h-8 bg-gradient-to-b from-headerLight to-transparent dark:bg-gradient-to-b dark:from-headerDark dark:to-transparent"></div>
    </div>
  );
};

export default Header;
