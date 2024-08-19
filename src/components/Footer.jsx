import { FaHelicopterSymbol } from "react-icons/fa6";
import { FaFacebook, FaTwitter, FaDiscord } from "react-icons/fa"; //<FaBacon />
import Tooltip from "./Tooltip";
import { NavLink } from "react-router-dom";
// need to use Link for social media links as desired below, or remove icons

const Footer = () => {
  return (
    <div className="z-10 left-0 right-0 bottom-0">
      <div className="m-0 p-0 h-8 bg-gradient-to-b from-transparent to-headerLight dark:bg-gradient-to-b dark:from-transparent dark:to-headerDark"></div>

      <div className="flex justify-between px-20 py-5 items-center bg-headerLight dark:bg-headerDark text-textLight dark:text-textDark">
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
        </div>{" "}
        <div>
          <span className="text-sm">
            Design Copyright &copy; 2024, DGS Creative, LLC
          </span>
        </div>
        <div className="flex items-center">
          {/* <ul className="flex items-center space-x-6">
            <li className="font-semibold text-black dark:text-white">
              <Tooltip message={"Facebook"} posit="above">
                <FaFacebook className="size-7" />
              </Tooltip>
            </li>
            <li className="font-semibold text-black dark:text-white">
              <Tooltip message={"Twitter"} posit="above">
                <FaTwitter className="size-7" />
              </Tooltip>
            </li>
            <li className="font-semibold text-black dark:text-white">
              <Tooltip message={"Discord"} posit="above">
                <FaDiscord className="size-7" />
              </Tooltip>
            </li>
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
