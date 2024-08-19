import Header from "../components/Header";
import Footer from "../components/Footer";

const Basic = () => {
  return (
    <div className="min-h-full bg-backgroundLight dark:bg-backgroundDark text-textLight dark:text-textDark">
      <Header />
      <div id="spacer" className="h-40"></div>
      <div className="min-h-screen">
        <div className="flex justify-center">
          <h1>Welcome to the Basic Dashboard Page</h1>
          <p>Accessible by users with BASIC or ADMIN role.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Basic;
