import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userRedux";
import productReducer from "./productRedux";

export const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
  },
});