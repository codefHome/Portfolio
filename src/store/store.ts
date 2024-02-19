import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import landingReducer from "./slices/landingSlice";
import { landingPageAPI } from "../api/landingAPI";

const store = configureStore({
  reducer: {
    lading: landingReducer,

    [landingPageAPI.reducerPath]: landingPageAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([landingPageAPI.middleware]),
});

setupListeners(store.dispatch);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
