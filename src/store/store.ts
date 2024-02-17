import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import landingReducer from "./slices/landingSlice";

const store = configureStore({
  reducer: {
    lading: landingReducer,
   
    // [authAPI.reducerPath]: authAPI.reducer,
    
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
    //   authAPI.middleware,
     
    ]),
});

setupListeners(store.dispatch);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
