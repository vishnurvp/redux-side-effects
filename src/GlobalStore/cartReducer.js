import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {isCartOpen: false,}

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    openCart(state) {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
