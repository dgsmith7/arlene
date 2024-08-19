import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-full bg-backgroundLight dark:bg-backgroundDark text-textLight dark:text-textDark">
      <Header />
      <div id="spacer" className="h-40"></div>
      <div className="min-h-screen">
        <div className="text-center text-xl m-10 px-10">
          <h2 className="text-center text-3xl m-5">Meet Arlene!</h2>
          <p>
            Arlene is a trained expert articial intelligence chatbot assistant.
          </p>
          <p>
            Arlene is an acronym/mnemonic for Aviation Readiness and Logistics
            Expertise eNginE.
          </p>
          <p>
            Populate your profile with information about your organization, and
            ask Arlene for advice. Arlene can make plans, produce reports, give
            advice, and otherwise assist you with tools to streamline your
            operations and maintenance.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
