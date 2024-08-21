import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [privileges, setPrivileges] = useState("");
  const [loading, setLoading] = useState(false);
  const [twoFACode, setTwoFACode] = useState("");
  const [oneFACompleted, setOneFACompleted] = useState(false);

  const { login } = useAuth();
  const { enqueueSnackbar } = useSnackbar();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    //let url = "http://localhost:3000";
    //let url = "https://avn-ready-backend-app-hxiez.ondigitalocean.app"; // for production
    let url = "https://arlene-app.com";
    // Request to your backend to authenticate the user
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/x-www-form-urlencoded",
    };

    let bodyContent = `username=${username}&password=${password}`;
    //   console.log("handlelogin sending :", bodyContent);
    await fetch(`${url}/login`, {
      method: "POST",
      credentials: "include", // to send HTTP only cookies
      body: bodyContent,
      headers: headersList,
    })
      .then((response) => response.json())
      .then((response) => {
        setLoading(false);
        //      console.log(response);
        if (response.message == "fail") {
          console.log("login fail");
          enqueueSnackbar("Invalid username or password", { variant: "error" });
        } else {
          setPrivileges(response.privileges.toString());
          setOneFACompleted(true);
          handleSend2FA();
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log("error - ", error);
        enqueueSnackbar("An error occured during authentication", {
          variant: "warning",
        });
      });
  };

  const handleSend2FA = async () => {
    setLoading(true);
    //let url = "http://localhost:3000";
    //let url = "https://avn-ready-backend-app-hxiez.ondigitalocean.app"; // for production
    let url = "https://arlene-app.com";
    // Request to your backend to send user a code
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/x-www-form-urlencoded",
    };
    await fetch(`${url}/mail2fa`, {
      method: "POST",
      credentials: "include", // to send HTTP only cookies
      headers: headersList,
    })
      .then((response) => response.json())
      .then((response) => {
        setLoading(false);
        //      console.log(response);
        if (response.message == "fail") {
          console.log("login fail");
          enqueueSnackbar(
            "There was a problem sending your two-factor authentication code.",
            { variant: "error" }
          );
        } else {
          enqueueSnackbar(
            "A two-factor authentication code will be sent shortly to the email associated with your account.",
            { variant: "success" }
          );
        }
      })
      .catch((error) => {
        console.log("error - ", error.message);
        enqueueSnackbar(
          "There was a problem sending your two-factor authentication code.",
          {
            variant: "warning",
          }
        );
      });
  };

  const handleVerify2FA = async (e) => {
    e.preventDefault();
    setLoading(true);
    //let url = "http://localhost:3000";
    //let url = "https://avn-ready-backend-app-hxiez.ondigitalocean.app"; // for production
    let url = "https://arlene-app.com";
    //    console.log("From verify :", username, privileges);
    // Request to your backend to authenticate the user
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/x-www-form-urlencoded",
    };

    let bodyContent = `tfa=${twoFACode}`;
    //    console.log("Entered code is ", twoFACode);
    await fetch(`${url}/verify2FA`, {
      method: "POST",
      credentials: "include", // to send HTTP only cookies
      body: bodyContent,
      headers: headersList,
    })
      .then((response) => response.json())
      .then((response) => {
        setLoading(false);
        if (response.message == "fail") {
          console.log("login fail");
          setOneFACompleted(false);
          enqueueSnackbar("Invalid authentication", { variant: "error" });
        } else {
          enqueueSnackbar(`Successfully logged in!`, {
            variant: "success",
          });
          login({
            //            email: { user }.email,
            username: { username }.username,
            privileges: { privileges }.privileges,
            twoFAVerified: true,
          });
        }
      })
      .catch((error) => {
        console.log("error - ", error);
        enqueueSnackbar("An error occured during authentication", {
          variant: "warning",
        });
      });
  };

  useEffect(() => {
    //  console.log("here - ", { user }.email);
    if (user) navigate("/profile");
  }, []);

  return (
    <div className="min-h-full bg-backgroundLight dark:bg-backgroundDark text-textLight dark:text-textDark">
      <div>
        {loading ? (
          <div className="fixed inset-0 z-30">
            <Spinner />
          </div>
        ) : (
          <div></div>
        )}
      </div>
      <Header />
      <div id="spacer" className="h-40"></div>
      <div className="min-h-screen">
        <div className="flex justify-center">
          {!oneFACompleted ? (
            <div className="bg-headerLight dark:bg-headerDark shadow-2xl rounded px-8 pt-4 pb-4 mb-4">
              <form onSubmit={handleLogin}>
                <div className="mb-4">
                  <label
                    className="block text-textLight dark:text-textDark text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    Username
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    value={username}
                    placeholder="Username"
                    tabIndex={0}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <p className=" text-textLight dark:text-textDark text-sm italic">
                    Please enter your username.
                  </p>
                </div>
                <div className="mb-6">
                  <label
                    className="block  text-textLight dark:text-textDark text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="******************"
                    tabIndex={0}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <p className=" text-textLight dark:text-textDark text-xs italic">
                    <span>Please enter your password.</span>
                  </p>
                </div>
                <div className="flex items-center justify-between mb-5">
                  <button
                    className="inline-block align-baseline font-bold text-lg text-textLight dark:text-textDark hover:text-blue-800 border border-textLight dark:border-textDark p-1 rounded-md"
                    type="submit"
                    tabIndex={0}
                  >
                    Log In
                  </button>
                </div>
                <div className="text-center">
                  {" "}
                  <Link
                    to={"/forgot"}
                    className="m-1 inline-block align-baseline text-sm text-textLight dark:text-textDark font-bold hover:text-blue-800 border border-textLight dark:border-textDark p-1 rounded-md"
                  >
                    Forgot password
                  </Link>
                </div>
                <div className="text-center">
                  <Link
                    to={"/signup"}
                    className="inline-block align-baseline font-bold text-sm text-textLight dark:text-textDark hover:text-blue-800 border border-textLight dark:border-textDark p-1 rounded-md"
                  >
                    New user? - Sign up
                  </Link>
                </div>
              </form>
            </div>
          ) : (
            <div className="bg-headerLight dark:bg-headerDark shadow-2xl rounded px-8 pt-4 pb-4 mb-4">
              <form onSubmit={handleVerify2FA}>
                <div className="mb-4">
                  <label
                    className="block text-textLight dark:text-textDark text-sm font-bold mb-2"
                    htmlFor="twoFACode"
                  >
                    Code
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-textLight mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="twoFACode"
                    type="twoFACode"
                    value={twoFACode}
                    placeholder="Code"
                    tabIndex={0}
                    onChange={(e) => setTwoFACode(e.target.value)}
                  />
                  <p className="text-textLight dark:text-textDark text-sm italic">
                    Please enter the code sent to the email address associated
                    with your account.
                  </p>
                </div>

                <div className="flex items-center justify-between mb-5">
                  <button
                    className="inline-block align-baseline font-bold text-lg text-textLight dark:text-textDark hover:text-blue-800 border border-textLight dark:border-textDark p-1 rounded-md"
                    type="submit"
                    tabIndex={0}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
