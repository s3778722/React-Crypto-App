import React from "react";
import { default as icon } from "../assets/dashboard-icon.svg";

const Dashboard = () => {
  return (
    <div className="container text-white">
      <h1 className="text-start">
        Dashboard
        <img src={icon} class="img-fluid ms-3" style={{ height: 60 }} />
      </h1>

      <h3 className="text-start fw-light">
        Global Cryptocurrency Market Stats
      </h3>
    </div>
  );
};

export default Dashboard;
