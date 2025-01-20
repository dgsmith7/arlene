import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("logged in? -> ", isAuthenticated);
    if (isAuthenticated) navigate("/profile");
  });

  return (
    <div className="splashImage bg-backgroundLight dark:bg-backgroundDark text-textLight dark:text-textDark">
      <Header />
      <div>
        <div className="flex self-center min-h-screen">
          <div className="m-auto text-center text-xl bg-transparent">
            <div className="text-center">
              <p className="text-6xl">Arlene</p>
              <p className="text-4xl">
                Aviation Readiness and Logistics Expertise Engine
              </p>
            </div>
            <div className="text-sm">
              Harnessing Artificial Intelligence to advance your mission.{" "}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
