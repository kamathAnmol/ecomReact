import { createSlice } from "@reduxjs/toolkit";

export const PRODUCTS_INITIAL_STATE = {
  products: [],
  categories: [],
};

export const productsSlice = createSlice({
  name: "product",
  initialState: PRODUCTS_INITIAL_STATE,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
  },
});

export const productsReducer = productsSlice.reducer;
export const { setProducts } = productsSlice.actions;
