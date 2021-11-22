import React from "react";
import { default as logo } from "../assets/bitcoin.svg";
import { default as icon } from "../assets/arrow-right.svg";

const Hero = () => {
  return (
    <div class="container text-white">
      <div class="row align-items-center ">
        <div class="col-md col-md-push-6">
          <h1 class="hero-main-text">
            Your Go To Crypto Platform for Better Investment.
          </h1>
          <br />
          <p class="hero-sub-text">
            A brand-new cryptocurrency platform for the up-to-date information
            related to cryptocurrencies, exchanges, and news.
          </p>
          <br />
          <button type="button" class="hero-button text-white btn-primary">
            Get Started
            <img src={icon} class="ms-2" />
          </button>
        </div>
        <div class="col-md col-md-pull-6">
          <img src={logo} class="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
