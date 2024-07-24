import Header from "../components/Header";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="p-4 bg-backgroundLight dark:bg-backgroundDark text-textLight dark:text-textDark">
      <Header />
      <div id="spacer" className="h-20"></div>
      <div className="min-h-screen">
        <div className="text-center text-xl">
          <div>
            This is the splash page avaialable to any visitior, even without
            authentication.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
