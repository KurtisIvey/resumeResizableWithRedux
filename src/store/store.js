import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import infoSlice from "./slices/infoSlice";

export const store = configureStore({
  reducer: {
    info: infoSlice.reducer,
  },
});
