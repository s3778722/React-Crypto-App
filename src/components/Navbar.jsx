import React from "react";
import { default as divider } from "../assets/divider.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-transparent nav-padding">
        <div class="container-fluid mt-5" style={{ fontWeight: 500 }}>
          <a
            class="navbar-brand"
            href="/"
            style={{ fontFamily: "Inter", fontWeight: 600 }}
          >
            CRYPTO REPUBLIC
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li class="nav-item">
                <Link to="/" class="nav-link text-white">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/cryptocurrencies" class="nav-link text-white">
                  Cryptocurrencies
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/exchanges" class="nav-link text-white">
                  Exchanges
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/news" class="nav-link text-white">
                  News
                </Link>
              </li>
              <img src={divider} class="mx-3 divider" />
              <li class="nav-item">
                <Link
                  to="/dashboard"
                  class="nav-link text-white btn-primary"
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
