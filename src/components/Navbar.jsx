import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-transparent nav-padding">
        <div class="container-fluid mt-5" style={{ fontWeight: 500 }}>
          <a
            class="navbar-brand"
            href="#"
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
                <a class="nav-link text-white" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">
                  Cryptocurrencies
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">
                  Exchanges
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" href="#">
                  News
                </a>
              </li>
              <li class="nav-item px-3">
                <a
                  class="nav-link text-white btn-primary"
                  style={{
                    paddingLeft: 25,
                    paddingRight: 25,
                    borderRadius: 32,
                  }}
                >
                  Dashboard
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
