import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <div className="background-black-container">
        <Navbar />
        <br />
        <Hero />
      </div>
    </div>
  );
}

export default App;
