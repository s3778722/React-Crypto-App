import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bing-news-search1.p.rapidapi.com/",
  }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({category, count}) => ({
        url: `/news/search?q=${category}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`,
        headers: {
          "x-bingapis-sdk": "true",
          "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
          "x-rapidapi-key":
            process.env.REACT_APP_NEWS_API_KEY,
        },
      }),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = newsApi;
