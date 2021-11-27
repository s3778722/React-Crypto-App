import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://coinranking1.p.rapidapi.com/",
  }),
  endpoints: (builder) => ({
    getGlobalStats: builder.query({
      query: () => ({
        url: `/stats`,
        headers: {
          "x-rapidapi-host": "coinranking1.p.rapidapi.com",
          "x-rapidapi-key":
            "325cd078c2msh71b8e6b04142541p1f7019jsnc86c65ed7aca",
        },
      }),
    }),
    getCoins: builder.query({
      query: () => ({
        url: `/coins`,
        headers: {
          "x-rapidapi-host": "coinranking1.p.rapidapi.com",
          "x-rapidapi-key":
            "325cd078c2msh71b8e6b04142541p1f7019jsnc86c65ed7aca",
        },
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetGlobalStatsQuery, useGetCoinsQuery } = cryptoApi;
