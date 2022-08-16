import "./App.css";
import Card from "./Components/Card/Card";
import Features from "./Components/Features/Features";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="font-dancing">
      <Navbar />
      <Card />
      <Features />
    </div>
  );
}

export default App;
