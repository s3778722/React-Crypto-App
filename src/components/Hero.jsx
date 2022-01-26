import React from "react";
import { default as logo } from "../assets/bitcoin.svg";
import { default as icon } from "../assets/arrow-right.svg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <div className="container text-white">
        <div className="row align-items-center ">
          <div className="col-md col-md-push-6">
            <h1 className="hero-main-text">
              Your Go To Crypto Platform for Better Investment.
            </h1>
            <br />
            <p className="hero-sub-text">
              A brand-new cryptocurrency platform for the up-to-date information
              related to cryptocurrencies, exchanges, and news.
            </p>
            <br />
            <Link
              to="/dashboard"
              className="hero-button text-white btn-primary"
            >
              Get Started
              <img src={icon} className="ms-2" alt="icon"/>
            </Link>
          </div>
          <div className="col-md col-md-pull-6 floating">
            <img src={logo} className="img-fluid" alt="bitcoin" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
