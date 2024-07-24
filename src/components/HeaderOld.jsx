import { FaHelicopterSymbol } from "react-icons/fa6";
import { FaDoorOpen } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { LuRadioTower } from "react-icons/lu";
import { BsInfoCircle } from "react-icons/bs";
import { IoMdChatboxes } from "react-icons/io";
import Tooltip from "./Tooltip";
import DarkModeButton from "./DarkModeButton";
//import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="z-50 fixed top-0 left-0 right-0">
      <nav className="flex justify-between px-20 py-5 items-center bg-white dark:bg-bacon_black-700 text-bacon_black-700 dark:text-white">
        <div className="text-center">
          {/* <Link
            as={NavLink}
            to={"/"}
            className="inline-block align-baseline font-bold text-sm text-black hover:text-blue-800"
          > */}
          <h1 className="text-xl text-black dark:text-white font-bold">
            <Tooltip message={"Home"} posit="below">
              <FaHelicopterSymbol className="size-7" />
            </Tooltip>
          </h1>
          {/* </Link> */}
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
                {/* <Link
                  as={NavLink}
                  to={"/about"}
                  className="inline-block align-baseline font-bold text-sm text-black hover:text-blue-800"
                > */}
                <h1 className="text-xl text-black dark:text-white font-bold">
                  <Tooltip message={"Chat with Arlene"} posit={"below"}>
                    <IoMdChatboxes className="size-7" />
                  </Tooltip>
                </h1>
                {/* </Link> */}
              </div>
            </li>
            <li className="font-semibold text-black dark:text-white">
              <div className="text-center">
                {/* <Link
                  as={NavLink}
                  to={"/about"}
                  className="inline-block align-baseline font-bold text-sm text-black hover:text-blue-800"
                > */}
                <h1 className="text-xl text-black dark:text-white font-bold">
                  <Tooltip message={"About"} posit={"below"}>
                    <BsInfoCircle className="size-7" />
                  </Tooltip>
                </h1>
                {/* </Link> */}
              </div>
            </li>
            <li className="font-semibold text-black dark:text-white">
              <div className="text-center">
                {/* <Link
                  as={NavLink}
                  to={"/contact"}
                  className="inline-block align-baseline font-bold text-sm text-black hover:text-blue-800"
                > */}
                <h1 className="text-xl text-black dark:text-white font-bold">
                  <Tooltip message={"Contact"} posit={"below"}>
                    <LuRadioTower className="size-7" />
                  </Tooltip>
                </h1>
                {/* </Link> */}
              </div>
            </li>
            <li className="font-semibold text-black dark:text-white">
              <div className="text-center">
                {/* <Link
                  as={NavLink}
                  to={"/profile"}
                  className="inline-block align-baseline font-bold text-sm text-black hover:text-blue-800"
                > */}
                <h1 className="text-xl text-black dark:text-white font-bold">
                  <Tooltip message={"Profile"} posit={"below"}>
                    <CgProfile className="size-7" />
                  </Tooltip>
                </h1>
                {/* </Link> */}
              </div>
            </li>
            {/* <li className="font-semibold text-black dark:text-white">
              <div className="text-center">
                <Link
                  as={NavLink}
                  to={"/cart"}
                  className="inline-block align-baseline font-bold text-sm text-black hover:text-blue-800"
                >
                <h1 className="text-xl text-black dark:text-white font-bold">
                  <Tooltip message={"Cart"} posit={"below"}>
                    <BsCart className="size-7" />
                  </Tooltip>
                </h1>
                </Link>
              </div>
            </li> */}
            <li className="font-semibold text-black dark:text-white">
              <div className="text-center">
                {/* <Link
                  as={NavLink}
                  to={
                    JSON.parse(localStorage.getItem("user")) === null
                      ? "/signin"
                      : "/profile"
                  }
                  className="inline-block align-baseline font-bold text-sm text-black hover:text-blue-800"
                > */}
                <h1 className="text-xl text-black dark:text-white font-bold">
                  <Tooltip message={"Signin/up"} posit={"below"}>
                    <FaDoorOpen className="size-7" />
                  </Tooltip>
                </h1>
                {/* </Link> */}
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
