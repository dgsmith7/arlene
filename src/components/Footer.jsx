import { FaHelicopterSymbol } from "react-icons/fa6";
import { FaFacebook, FaTwitter, FaDiscord } from "react-icons/fa"; //<FaBacon />
import Tooltip from "./Tooltip";
// need to use Link for social media links as desired below, or remove icons

const Footer = () => {
  return (
    <div className="z-50 inset-x-0 bottom-0">
      <div className="flex justify-between px-20 py-5 items-center bg-headerLight dark:bg-headerDark text-textLight dark:text-textDark">
        <div>
          <h1 className="text-xl text-black dark:text-white font-bold">
            <FaHelicopterSymbol className="size-7" />
          </h1>
        </div>
        <div>
          <span className="text-sm">
            Copyright &copy; 2024, DGS Creative, LLC
          </span>
        </div>
        <div className="flex items-center">
          <ul className="flex items-center space-x-6">
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
