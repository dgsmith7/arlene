import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { passwordStrength } from "check-password-strength";

const Reset = () => {
  const [password, setPassword] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleReset = async (e) => {
    e.preventDefault();
    setLoading(true);
    let url = "https://avn-ready-backend-app-hxiez.ondigitalocean.app"; // for production
    //    let url = "http://localhost:3000";
    const token = window.location.pathname.split("/").pop();
    console.log(token);
    // send the token to the backend for validation along with the new password and display the result.  If it validates, nav to the login page.  If it does not validate send to forgot page.
    // Request to your backend to authenticate the user
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/x-www-form-urlencoded",
    };

    let bodyContent = `password=${password}`;
    console.log("Password entered is ", password);
    await fetch(`${url}/reset-password/${token}`, {
      method: "POST",
      credentials: "include", // to send HTTP only cookies
      body: bodyContent,
      headers: headersList,
    })
      .then((response) => response.json())
      .then((response) => {
        setLoading(false);
        if (response.message != "Password updated") {
          console.log("login fail");
          enqueueSnackbar("No such user.", { variant: "error" });
        } else {
          enqueueSnackbar("Successfully updated password.", {
            variant: "success",
          });
          navigate("/login", { push: true });
        }
      })
      .catch((error) => {
        console.log("error - ", error);
        enqueueSnackbar("Could not reset password.", {
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
            onSubmit={handleReset}
            className="bg-gray-500 shadow-2xl rounded px-8 pt-4 pb-4 mb-4"
          >
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
                placeholder="******************"
                tabIndex={0}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p className="text-black text-xs italic">
                <span>
                  Please enter your new STRONG password (10 char min with
                  uppercase, lowercase, symbol, and number).
                </span>
              </p>
              <p className="text-red text-xs bold"></p>
            </div>

            <div className="flex items-center justify-between mb-5">
              <button
                // className="inline-block align-baseline font-bold text-lg py-2 px-4 text-black hover:text-blue-800 border border-black p-1 rounded-md"
                className={
                  passwordStrength(password).value != "Strong" ||
                  password.length < 10
                    ? "bg-blue-500 align-baseline font-bold text-lg py-2 px-4 text-white rounded-md opacity-50 cursor-not-allowed"
                    : "inline-block align-baseline font-bold text-lg py-2 px-4 text-black hover:text-blue-800 border border-black p-1 rounded-md"
                }
                type="submit"
                tabIndex={0}
              >
                Submit
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

export default Reset;
