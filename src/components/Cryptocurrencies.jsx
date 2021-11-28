import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import millify from "millify";
import { useGetCoinsQuery } from "../services/cryptoApi";

const Cryptocurrencies = ({ minimal }) => {
  const count = minimal ? 10 : 100;
  const { data, error, isLoading, isFetching } = useGetCoinsQuery(count);
  const [cryptos, setCryptos] = useState(data?.data?.coins);

  useEffect(() => {
    setCryptos(data?.data?.coins);
  }, [data]);

  if (isFetching || isLoading) {
    return "";
  }
  console.log(cryptos);
  return (
    <div className="container text-white">
      <h1 className="text-start">Cryptocurrencies</h1>
      <div className="d-flex justify-content-between">
        <h3 className="text-start fw-light text-white-50 pe-3">
          Top 10 Cryptocurrencies in the World
        </h3>
        <Link
          to={"/cryptocurrencies"}
          className="text-white-50"
          style={{ textDecoration: "none" }}
        >
          <span>Show more</span>
        </Link>
      </div>
      <div className="row g-3 ">
        {cryptos?.map((currency) => (
          <div class="col-xl-3 col-md-6" key={currency.id}>
            <div class="card text-white" style={{ backgroundColor: "#13133A" }}>
              <div class="card-body">
                <div className="card-header ">
                  <div class="d-flex justify-content-between">
                    <h5>{`${currency.rank}. ${currency.name} `}</h5>

                    <img
                      src={currency.iconUrl}
                      alt="..."
                      className="img-fluid"
                      style={{ maxWidth: 30 }}
                    />
                  </div>
                </div>
                <div class="card-text text-start">
                  <p className="text-white-50">Symbol: {currency.symbol}</p>
                  <p className="text-white">Price: ${currency.price}</p>
                  <p>
                    Market Cap: $
                    {millify(currency.marketCap, {
                      precision: 3,
                    })}
                  </p>
                  <p>
                    Volume: $
                    {millify(currency.volume, {
                      precision: 3,
                    })}
                  </p>
                  <p>
                    Circulating Supply:{" "}
                    {currency.circulatingSupply &&
                      millify(currency.circulatingSupply, {
                        precision: 3,
                      })}
                  </p>
                  <p>
                    Change:{" "}
                    {currency.circulatingSupply &&
                      millify(currency.change, {
                        precision: 2,
                      })}
                    %
                  </p>
                </div>
                <div className="text-end">
                  <Link
                    to={`/crypto/${currency.id}`}
                    class="btn btn-outline-info btn-sm"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cryptocurrencies;
