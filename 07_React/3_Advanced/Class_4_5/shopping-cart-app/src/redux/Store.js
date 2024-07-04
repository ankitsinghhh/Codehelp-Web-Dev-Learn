import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cartSlice"; // Import the default export

export const store = configureStore({
  reducer: {
    cart: cartReducer, // Use the correct imported reducer
  },
});
