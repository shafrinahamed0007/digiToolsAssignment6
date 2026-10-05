import "./App.css";
import ActiveUsers from "./components/ActiveUsers";
import Footer from "./components/Footer";
import GetSteps from "./components/GetSteps";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import PremiumTools from "./components/PremiumTools";
import Pricing from "./components/Pricing";
import Workflow from "./components/Workflow";

const getData = async () => {
  const res = await fetch("./data.json");
  return res.json();
};

const dataPromise = getData();
  // console.log(dataPromise);

function App() {
  
  return (
    <div>
      <Navbar />
      <Header />
      <PremiumTools dataPromise={dataPromise} />
      <ActiveUsers />
      <GetSteps />
      <Pricing />
      <Workflow />
      <Footer />
    </div>
  );
}

export default App;
