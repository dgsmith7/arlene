import { FaBacon, FaFacebook, FaTwitter, FaDiscord } from "react-icons/fa"; //<FaBacon />
import Tooltip from "./Tooltip";
// need to use Link for social media links as desired below, or remove icons

const Footer = () => {
  return (
    <div className="z-50 inset-x-0 bottom-0">
      <div className="flex justify-between px-20 py-5 items-center bg-white dark:bg-bacon_black-700 text-bacon_black-700 dark:text-white">
        <div>
          <h1 className="text-xl text-black dark:text-white font-bold">
            <FaBacon className="size-7" />
          </h1>
        </div>
        <div>
          <span className="text-sm">
            Copyright &copy; 2024, Baconbits Collective
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
