import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://coinranking1.p.rapidapi.com",
  }),
  endpoints: (builder) => ({
    getGlobalStats: builder.query({
      query: () => ({
        url: `/stats`,
        params: { referenceCurrencyUuid: "yhjMzLPhuIDl" },
        headers: {
          "x-rapidapi-host": "coinranking1.p.rapidapi.com",
          "x-rapidapi-key":
            process.env.REACT_APP_COINRANKING_API_KEY,
        },
      }),
    }),
    getCoins: builder.query({
      query: (count) => ({
        url: `/coins?limit=${count}`,
        params: { referenceCurrencyUuid: "yhjMzLPhuIDl" },
        headers: {
          "x-rapidapi-host": "coinranking1.p.rapidapi.com",
          "x-rapidapi-key":
          process.env.REACT_APP_COINRANKING_API_KEY,
        },
      }),
    }),
    getCoinDetails: builder.query({
      query: (coinUUID) => ({
        url: `/coin/${coinUUID}`,
        params: { referenceCurrencyUuid: "yhjMzLPhuIDl" },
        headers: {
          "x-rapidapi-host": "coinranking1.p.rapidapi.com",
          "x-rapidapi-key":
          process.env.REACT_APP_COINRANKING_API_KEY,
        },
      }),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) => ({
        url: `/coin/${coinId}/history`,
        params: { referenceCurrencyUuid: "yhjMzLPhuIDl", timePeriod: timeperiod },
        headers: {
          "x-rapidapi-host": "coinranking1.p.rapidapi.com",
          "x-rapidapi-key":
          process.env.REACT_APP_COINRANKING_API_KEY,
        },
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetGlobalStatsQuery,
  useGetCoinsQuery,
  useGetCoinDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;
