import "./App.css";
import {
  Navbar,
  Hero,
  Cryptocurrencies,
  News,
  Crypto,
  Exchanges,
  Dashboard,
  Footer,
} from "./components/routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
          <Route exact path="/exchanges" element={<Exchanges />} />
          <Route exact path="/news" element={<News />} />
          <Route exact path="/crypto/:coinId" element={<Crypto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
