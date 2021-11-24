import React from "react";
import { useGetGlobalStatsQuery } from "../services/cryptoApi";
import millify from "millify";
const Dashboard = () => {
  const { data, error, isLoading } = useGetGlobalStatsQuery();
  if (isLoading) {
    return "Loading...";
  }

  console.log(data.data);
  return (
    <div className="container text-white">
      <h1 className="text-start">Dashboard</h1>

      <h3 className="text-start fw-light text-white-50">
        Global Cryptocurrency Market Stats
      </h3>
      <hr />
      <div className="container">
        <div class="row align-items-start">
          <div class="col-6 align-self-center p-3 ">
            <span className="text-info">Total Market Cap:</span>
            <h4>
              {millify(data.data.totalMarketCap, {
                precision: 3,
              })}
            </h4>
          </div>
          <div class="col-6 align-self-center p-3">
            <span className="text-info">Total 24h Volume:</span>
            <h4>
              {millify(data.data.total24hVolume, {
                precision: 3,
              })}
            </h4>
          </div>
          <div class="col-6 align-self-center p-3">
            <span className="text-info">Total Coins:</span>
            <h4>
              {millify(data.data.totalCoins, {
                precision: 2,
              })}
            </h4>
          </div>{" "}
          <div class="col-6 align-self-center p-3">
            <span className="text-info">Total Exchanges:</span>
            <h4>
              {millify(data.data.totalExchanges, {
                precision: 3,
              })}
            </h4>
          </div>{" "}
          <div class="col-6 align-self-center p-3">
            <span className="text-info">Total Markets:</span>

            <h4>
              {millify(data.data.totalMarkets, {
                precision: 2,
              })}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
