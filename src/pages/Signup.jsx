import { useState } from "react";
//import { useAuth } from "../hooks/useAuth";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";
import { useSnackbar } from "notistack";
import { passwordStrength } from "check-password-strength";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    //let url = "http://localhost:3000";
    let url = "https://avn-ready-backend-app-hxiez.ondigitalocean.app"; // for production

    // Request to your backend to authenticate the user
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/x-www-form-urlencoded",
    };

    let bodyContent = `username=${username}&password=${password}&email=${email}`;

    await fetch(`${url}/register`, {
      method: "POST",
      credentials: "include", // to send HTTP only cookies
      body: bodyContent,
      headers: headersList,
    })
      .then((response) => response.json())
      .then((response) => {
        setLoading(false);
        if (response.message != "Successfully registered.") {
          console.log("Signing up:", response.message, response.err);
          enqueueSnackbar("Invalid or duplicate username or email", {
            variant: "warning",
          });
        } else {
          console.log("from signin response: ", response.priv);
          enqueueSnackbar("Successfully registered", { variant: "success" });
          console.log("from signup: ", {
            username: username,
            priv: response.priv,
          });
          navigate("/login", { push: true });
        }
      })
      .catch((error) => {
        console.log("error - ", error);
        enqueueSnackbar("An error occured during authentication", {
          variant: "warning",
        });
      });
  };

  return (
    <div className="min-h-full bg-backgroundLight dark:bg-backgroundDark text-textLight dark:text-textDark">
      <Header />
      <div id="spacer" className="h-40"></div>
      <div className="min-h-screen">
        <div className="flex justify-center">
          <form
            className="bg-headerLight dark:bg-headerDark shadow-2xl rounded px-8 pt-4 pb-4 mb-4"
            onSubmit={handleRegister}
          >
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
                tabIndex={0}
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <p className="text-textLight dark:text-textDark text-xs italic">
                Please choose a username.
              </p>
            </div>
            <div className="mb-6">
              <label
                className="block text-textLight dark:text-textDark text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password{" "}
                <span className="mx-1 font-normal italic">
                  (Strength: {passwordStrength(password).value})
                </span>
              </label>

              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                tabIndex={0}
                placeholder="************"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="text-textLight dark:text-textDark text-xs italic">
                Please enter your new STRONG password (10 char min with
                uppercase, lowercase, symbol, and number).
              </p>
              <p className="text-red text-xs bold"></p>
            </div>
            <div className="mb-6">
              <label
                className="block text-textLight dark:text-textDark text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                tabIndex={0}
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="text-textLight dark:text-textDark text-xs italic">
                Please enter your email address.
              </p>
            </div>
            <div className="flex items-center justify-start mb-5">
              <button
                // className="inline-block align-baseline font-bold text-lg text-textLight dark:text-textDark hover:text-blue-800 border border-black p-1 rounded-md"
                className={
                  passwordStrength(password).value != "Strong" ||
                  password.length < 10
                    ? "inline-block align-baseline font-bold text-lg text-textLight dark:text-textDark hover:text-blue-800 border border-textLight dark:border-textDark p-1 rounded-md opacity-50 cursor-not-allowed"
                    : "inline-block align-baseline font-bold text-lg text-textLight dark:text-textDark hover:text-blue-800 border border-textLight dark:border-textDark p-1 rounded-md"
                }
                type="submit"
                tabIndex={0}
              >
                Register
              </button>
              {loading ? <Spinner /> : <></>}
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
