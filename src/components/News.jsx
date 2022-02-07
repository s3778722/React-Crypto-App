import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGetCryptoNewsQuery } from "../services/newsApi";
import { useGetCoinsQuery } from "../services/cryptoApi";
import moment from "moment";
import cryptoDefault from "../assets/crypto-default.jpg";
const News = ({ minimal }) => {
  const count = minimal ? 10 : 100;
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const {
    data: cryptoNews,
    isLoading,
    isFetching,
  } = useGetCryptoNewsQuery({ category: newsCategory, count: count });
  const { data } = useGetCoinsQuery(100);

  if (isFetching || isLoading || !cryptoNews?.value) {
    return "Loading...";
  }

  const defaultImage = cryptoDefault;

  const setNewsEvent = (event) => {
    setNewsCategory(event.target.value);
  };

  return (
    <div className="container text-white">
      <div className="">
        {minimal && (
          <>
            <h1 className="text-start">News</h1>
            <div className=" d-flex justify-content-between">
              <h3 className="text-start fw-light text-white-50 pe-3">
                Latest Cryptocurrencies News
              </h3>
              <Link
                to={"/news"}
                className="text-white-50"
                style={{ textDecoration: "none" }}
              >
                <span>Show more</span>
              </Link>
            </div>
          </>
        )}
        {!minimal && (
          <div className=" d-flex justify-content-between">
            <h1 className="text-start">News</h1>
            <div className="pb-3">
              <select
                className="form-select border border-info bg-transparent text-white"
                aria-label="Default select example"
                onChange={(value) => setNewsEvent(value)}
              >
                <option value="Cryptocurrency">Cryptocurrency</option>
                {data?.data?.coins.map((c) => (
                  <option value={c.name} key={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>
      <div className="row g-3 ">
        {cryptoNews?.value.map((news, index) => (
          <div key={index}>
            <a
              href={news.url}
              rel="norefferer"
              className="cards"
              style={{ textDecoration: "none" }}
            >
              <div className="card p-3 text-white bg-transparent hover card-shadow">
                <div className="row">
                  <div className="col-md-3">
                    <div className="position-relative snipimage">
                      <img
                        src={news?.image?.thumbnail?.contentUrl || defaultImage}
                        className="rounded img-fluid w-100 img-responsive"
                        alt="news"
                      />
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="mt-0">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="card-body">
                          <div className="card-header text-start">
                            <h2>{news.name}</h2>
                          </div>
                          <div className="card-text text-start p-3">
                            <h5 className="text-white-50">
                              {news.description.length > 200
                                ? `${news.description.substring(0, 200)}...`
                                : news.description}
                            </h5>
                          </div>
                        </div>
                      </div>

                      <div className="d-flex justify-content-end align-items-center">
                        {" "}
                        {/** 
                        <img
                          src={news.provider[0].image?.thumbnail?.contentUrl}
                          width="30"
                          height="30"
                          className="rounded-circle me-2"
                          alt="thumbnail"
                        />
                        */}
                        <div className="ms-2 d-flex flex-column">
                          <div className="d-flex flex-row align-items-center">
                            <h6>{news.provider[0].name}</h6>
                          </div>{" "}
                          <span className="days-ago text-end">
                            {moment(news.datePublished).startOf("ss").fromNow()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
            {/*                  
            <div class="col-xl-3 col-md-6 cards" key={index}>
              <a
                href={news.url}
                rel="norefferer"
                style={{ textDecoration: "none" }}
              >
                <div class="card text-white bg-transparent hover card-shadow">
                  <img
                    src={
                      news?.image?.thumbnail?.contentUrl ||
                      cryptoNews?.value[0].image.thumbnail.contentUrl
                    }
                    className="card-img-top"
                    alt="..."
                    style={{ maxHeight: 300 }}
                  />
                  <div class="card-body">
                    <div className="card-header">
                      <div class="d-flex justify-content-between">
                        <h5>{news.name}</h5>
                      </div>
                    </div>
                    <div class="card-text text-start">
                      <p className="text-white-50">
                        {news.description.length > 200
                          ? `${news.description.substring(0, 200)}...`
                          : news.description}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
                        */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
