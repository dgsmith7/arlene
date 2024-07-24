import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-full p-4 bg-backgroundLight dark:bg-backgroundDark text-textLight dark:text-textDark">
      <Header />
      <div id="spacer" className="h-20"></div>
      <div className="min-h-screen">
        <div className="text-center text-xl">
          <h1>Welcome to the About Page</h1>
          <p>Accessible by any user with or without authentication.</p>
          <p>This page will tell all about the program.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
