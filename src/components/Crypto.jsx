import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetCoinDetailsQuery,
  useGetCryptoHistoryQuery,
} from "../services/cryptoApi";
import millify from "millify";
import parse from "html-react-parser";
import Chart from "./Chart";
import Spinner from "./Spinner";
import arrowUp from "../assets/arrow-up.png";
import arrowDown from "../assets/arrow-down.png";

const Crypto = () => {
  const { coinId } = useParams();
  const { data, isFetching } = useGetCoinDetailsQuery(coinId);
  const [timeperiod, setTimeperiod] = useState("7d");
  const { data: coinHistory } = useGetCryptoHistoryQuery({
    coinId,
    timeperiod,
  });
  const cryptoDetails = data?.data?.coin;
  console.log(cryptoDetails);
  if (isFetching) {
    return <Spinner />;
  }

  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

  const setTimeEvent = (event) => {
    setTimeperiod(event.target.value);
  };

  const stats = [
    {
      title: "Price to USD",
      value: `$${cryptoDetails.price}`,
    },
    { title: "Rank", value: cryptoDetails.rank },
    {
      title: "24h Volume",
      value: `$${
        cryptoDetails["24hVolume"] && millify(cryptoDetails["24hVolume"])
      }`,
    },
    {
      title: "Market Cap",
      value: `$${cryptoDetails.marketCap && millify(cryptoDetails.marketCap)}`,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$${cryptoDetails.allTimeHigh.price}`,
    },
    {
      title: "24h Change",
      value: `${cryptoDetails.change}%`,
    },
  ];

  const otherStats = [
    { title: "Number Of Markets", value: cryptoDetails.numberOfMarkets },
    { title: "Number Of Exchanges", value: cryptoDetails.numberOfExchanges },
    {
      title: "Aprroved Supply",
      value: cryptoDetails.supply.confirmed ? "True" : "False",
    },
    {
      title: "Total Supply",
      value: cryptoDetails.supply.total
        ? `$${millify(cryptoDetails.supply.total)}`
        : "null",
    },
    {
      title: "Circulating Supply",
      value: cryptoDetails.supply.circulating
        ? `$${millify(cryptoDetails.supply.circulating)}`
        : "null",
    },
  ];

  return (
    <div>
      <div className="container text-white">
        <div className="d-flex justify-content-start">
          <img
            src={cryptoDetails.iconUrl}
            alt={cryptoDetails.name}
            style={{ maxWidth: 60 }}
            className="px-3"
          />

          <h1>
            {cryptoDetails.name} - {cryptoDetails.symbol}
          </h1>
        </div>
        <div className="d-lg-flex justify-content-between">
          <p className="text-white-50">
            {cryptoDetails.name} live price in US Dollar (USD). View crypto
            statistics, market cap and supply.
          </p>
          <div class="d-flex justify-content-center">
            {coinHistory?.data?.change > 0 ? (
              <img
                src={arrowUp}
                alt=""
                style={{ width: 25, height: 25 }}
                className="mx-3"
              />
            ) : (
              <img
                src={arrowDown}
                alt=""
                style={{ width: 25, height: 25 }}
                className="mx-3"
              />
            )}

            <p className="text-white">Change: {coinHistory?.data?.change}%</p>
          </div>
        </div>
        <div className="pb-3">
          <select
            className="form-select border border-info bg-transparent text-white"
            aria-label="Default select example"
            defaultValue="7d"
            onChange={setTimeEvent}
          >
            {time.map((t) => (
              <option value={t} key={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <Chart coinHistory={coinHistory} />
        <br />

        <div className="d-flex flex-column flex-lg-row justify-content-around">
          <div>
            <h5 className="mb-3">{cryptoDetails.name} Key Statistics</h5>
            {stats.map(({ title, value }) => (
              <div key={title}>
                <div className="container text-white">
                  <div className="row align-items-start">
                    <div className="col">{title}</div>
                    <div className="col">{value}</div>
                  </div>
                </div>

                <hr style={{ backgroundColor: "white" }} />
              </div>
            ))}
          </div>
          <div>
            <h5 className="mb-3">Other Statistics</h5>
            {otherStats.map(({ title, value }) => (
              <div key={title}>
                <div className="container text-white">
                  <div className="row align-items-start">
                    <div className="col">{title}</div>
                    <div className="col">{value}</div>
                  </div>
                </div>

                <hr style={{ backgroundColor: "white" }} />
              </div>
            ))}
          </div>
        </div>
        <div className="text-start">
          <h2>Description</h2>
          {parse(cryptoDetails.description)}
        </div>
        <hr />
        <h5 className="p-2 text-white-50">Links</h5>
        <div className="container">
          <div className="row g-2">
            {cryptoDetails.links.map((link) => (
              <div className="col" key={link.url}>
                <a
                  className="btn btn-outline-info"
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.type} - {link.name}
                </a>
              </div>
            ))}
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Crypto;
