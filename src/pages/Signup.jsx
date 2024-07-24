import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";
import { useSnackbar } from "notistack";
import { passwordStrength } from "check-password-strength";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const { enqueueSnackbar } = useSnackbar();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    let url = "http://localhost:3000";

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
          login({ username: username, priv: response.priv });
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
    <div className="min-h-full p-4 bg-white text-black">
      <Header />
      <div id="spacer" className="h-20"></div>
      <div className="min-h-screen">
        <div className="flex justify-center">
          <form
            className="bg-gray-500 shadow-2xl rounded px-8 pt-4 pb-4 mb-4"
            onSubmit={handleRegister}
          >
            <div className="mb-4">
              <label
                className="block text-black text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                value={username}
                tabIndex={0}
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <p className="text-black text-xs italic">
                Please choose a username.
              </p>
            </div>
            <div className="mb-6">
              <label
                className="block text-black text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password{" "}
                <span className="mx-1 font-normal italic">
                  (Strength: {passwordStrength(password).value})
                </span>
              </label>

              <input
                className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                tabIndex={0}
                placeholder="************"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="text-black text-xs italic">
                Please enter your new STRONG password (10 char min with
                uppercase, lowercase, symbol, and number).
              </p>
              <p className="text-red text-xs bold"></p>
            </div>
            <div className="mb-6">
              <label
                className="block text-black text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="bg-white shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                tabIndex={0}
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="text-black text-xs italic">
                Please enter your email address.
              </p>
            </div>
            <div className="flex items-center justify-start mb-5">
              <button
                // className="inline-block align-baseline font-bold text-lg text-black hover:text-blue-800 border border-black p-1 rounded-md"
                className={
                  passwordStrength(password).value != "Strong" ||
                  password.length < 10
                    ? "bg-blue-500 align-baseline font-bold text-lg py-2 px-4 text-white rounded-md opacity-50 cursor-not-allowed"
                    : "inline-block align-baseline font-bold text-lg py-2 px-4 text-black hover:text-blue-800 border border-black p-1 rounded-md"
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
