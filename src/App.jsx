import "./App.css";
// import About from "./Components/About/About";
import FeatureSection from "./Components/FeatureSection/FeatureSection";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Pioneers from "./Components/Pioneers/Pioneers";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Dashboard from "./Components/Dashboard/Dashboard";
import Editprofile from "./Components/EditProfile/Editprofile";
import Ideainsight from "./Components/IdeaInsight/Ideainsight";

function App() {

  return(
    <Ideainsight />
  );
  /*return (
    <div>
      <div className="mainContainer">
        <div className="subContainer1">
          <Header />
          <Hero />
        </div>
      </div>
      <div className="subContainer4">
        <Pioneers />
      </div>

      <div className="subContainer2">
        <FeatureSection />
      </div>

      <div className="subContainer5">
        <Footer />
      </div>

      <div className="subContainer6">
        <Login />
      </div>
      <div className="subContainer7">
        <SignUp />
      </div>

      <div>
        <Dashboard />
        <Editprofile />
        <Ideainsight />
      </div>
    </div>
  );*/
}

export default App;
