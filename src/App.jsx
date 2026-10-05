import "./App.css";
import ActiveUsers from "./components/ActiveUsers";
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
    </div>
  );
}

export default App;
