import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: (state, action) => {
      // Define add logic
      state.push(action.payload); // Adds the payload to the cart
    },
    remove: (state, action) => {
      // Define remove logic
      return state.filter((item) => item.id !== action.payload); // Removes the item with the matching id
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
