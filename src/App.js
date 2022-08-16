import "./App.css";
import Card from "./Components/Card/Card";
import Features from "./Components/Features/Features";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="font-dancing">
      <Navbar />
      <Card />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
