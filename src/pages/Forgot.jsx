import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const handleForgot = async (e) => {
    e.preventDefault();
    setLoading(true);
    //let url = "http://localhost:3000";
    let url = "https://avn-ready-backend-app-8eg86.ondigitalocean.app"; // for production
    // Request to your backend to authenticate the user
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/x-www-form-urlencoded",
    };

    let bodyContent = `email=${email}`;
    await fetch(`${url}/forgot`, {
      method: "POST",
      credentials: "include", // to send HTTP only cookies
      body: bodyContent,
      headers: headersList,
    })
      .then((response) => response.json())
      .then((r) => {
        setLoading(false);
        enqueueSnackbar(
          "If an account with that email exists, we will send you a instructions to reset your password shortly.",
          {
            variant: "success",
          }
        );
        navigate("/login", { push: true });
      })
      .catch((error) => {
        console.log("error - ", error);
        enqueueSnackbar(
          "There is a problem on our end. Please try again later.",
          {
            variant: "error",
          }
        );
      });
  };

  return (
    <div className="min-h-full p-4 bg-white text-black">
      <Header />
      <div id="spacer" className="h-40"></div>
      <div className="min-h-screen">
        <div className="flex justify-center">
          <form
            onSubmit={handleForgot}
            className="bg-gray-500 shadow-2xl rounded px-8 pt-4 pb-4 mb-4"
          >
            <div className="mb-4">
              <label
                className="block text-black text-sm font-bold mb-2"
                htmlFor="twoFACode"
              >
                Email address
              </label>
              <input
                className="bg-white shadow appearance-none border rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                value={email}
                placeholder="you@email.com"
                tabIndex={0}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p className="text-black text-sm italic">
                Please enter the email address associated with your account.
              </p>
            </div>

            <div className="flex items-center justify-between mb-5">
              <button
                className="inline-block align-baseline font-bold text-lg text-black hover:text-blue-800 border border-black p-1 rounded-md"
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

export default Forgot;
