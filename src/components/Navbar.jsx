import React from "react";
import { default as divider } from "../assets/divider.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent nav-padding">
        <div className="container-fluid mt-3 mt-lg-5" style={{ fontWeight: 500 }}>
          <a
            className="navbar-brand"
            href="/"
            style={{ fontFamily: "Inter", fontWeight: 600 }}
          >
            CRYPTO REPUBLIC
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link to="/" className="nav-link text-white">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cryptocurrencies" className="nav-link text-white">
                  Cryptocurrencies
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/news" className="nav-link text-white">
                  News
                </Link>
              </li>
              <img src={divider} className="mx-3 divider" alt="divider"/>
              <li className="nav-item">
                <Link
                  to="/dashboard"
                  className="nav-link text-white btn-primary"
                  style={{
                    paddingLeft: 25,
                    paddingRight: 25,
                    borderRadius: 32,
                  }}
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
