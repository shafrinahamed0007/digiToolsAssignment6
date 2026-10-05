import "./App.css";
import ActiveUsers from "./components/ActiveUsers";
import Footer from "./components/Footer";
import GetSteps from "./components/GetSteps";
import Header from "./components/Header";
import Pricing from "./components/Pricing";
import Workflow from "./components/Workflow";

function App() {
  return (
    <div>
     <Header />
     <ActiveUsers />
     <GetSteps />
     <Pricing />
     <Workflow />
     <Footer />
    </div>
  );
}

export default App;
