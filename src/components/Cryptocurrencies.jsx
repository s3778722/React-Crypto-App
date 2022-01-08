import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import millify from "millify";
import { useGetCoinsQuery } from "../services/cryptoApi";

const Cryptocurrencies = ({ minimal }) => {
  const count = minimal ? 10 : 100;
  const { data, isLoading, isFetching } = useGetCoinsQuery(count);
  const [cryptos, setCryptos] = useState(data?.data?.coins);
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    setCryptos(data?.data?.coins);
  }, [data]);

  useEffect(() => {
    const filteredData  = data?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))
    setCryptos(filteredData)
  }, [data?.data?.coins,searchTerm])

  if (isFetching || isLoading) {
    return "";
  }

  const searchFunctionEvent = (e) => {
    setSearchTerm(e.target.value)
  }

  const checkSafeInteger = (currency) => {
    if (currency.circulatingSupply > Number.MAX_SAFE_INTEGER || currency.circulatingSupply < Number.MIN_SAFE_INTEGER){
      return currency.circulatingSupply
    }
    return (millify(currency.circulatingSupply, {
      precision: 3,
    }))
  }
  
  console.log(cryptos);
  return (
    
    <div className="container text-white">
      {minimal &&
      <div className="crypto-search-bar pb-3">
        <input type="text" class="form-control border border-info bg-transparent text-white" placeholder="Search Cryptocurrency" onChange={searchFunctionEvent}/>
      </div>
      } 
      <h1 className="text-start">Cryptocurrencies</h1>
     
      <div className="d-flex justify-content-between">
        {minimal ? (
          <>
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
           
          </>
        ) : (
          <>
            <h3 className="text-start fw-light text-white-50 pe-3">
              Top 100 Cryptocurrencies in the World
            </h3>
            <div className="crypto-search-bar pb-3">
              <input type="text" class="form-control  border border-info bg-transparent text-white" placeholder="Search Cryptocurrency" onChange={searchFunctionEvent}/>
            </div>
          </>
        )}
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
                      checkSafeInteger(currency)}
                  </p>
                  <p>
                    Change:{" "}
                    {currency.change &&
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
      <br />
    </div>
  );
};

export default Cryptocurrencies;
