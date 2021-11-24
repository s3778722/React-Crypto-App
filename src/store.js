import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "./services/cryptoApi";
import { setupListeners } from "@reduxjs/toolkit/query";
export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    // [pokemonApi.reducerPath]: pokemonApi.reducer,
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  //middleware: (getDefaultMiddleware) =>
  // getDefaultMiddleware().concat(pokemonApi.middleware),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cryptoApi.middleware),
});
setupListeners(store.dispatch);
