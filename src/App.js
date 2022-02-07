import "./App.css";
import {
  Navbar,
  Hero,
  Cryptocurrencies,
  News,
  Crypto,
  Dashboard,
  Footer,
} from "./components/routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
require('dotenv').config()

function App() {
 
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div className="background-black-container">
                <Navbar />
                <br />
                <Hero />
              </div>
            }
          />
          <Route
            exact
            path="/dashboard"
            element={
              <div className="background-dark-blue-container">
                <Navbar />
                <br />
                <Dashboard />
                <Cryptocurrencies minimal={true} />
                <News minimal={true} />
              </div>
            }
          />

          <Route
            exact
            path="/cryptocurrencies"
            element={
              <div className="background-dark-blue-container">
                <Navbar />
                <br />
                <Cryptocurrencies />
              </div>
            }
          />
        
          <Route
            exact
            path="/news"
            element={
              <div className="background-dark-blue-container">
                <Navbar />
                <br />
                <News />
              </div>
            }
          />
          <Route
            exact
            path="/crypto/:coinId"
            element={
              <div className="background-dark-blue-container">
                <Navbar />
                <br />
                <Crypto />
              </div>
            }
          />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
