import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
export interface productInterface {
  brand?: string;
  category?: string;
  description?: string;
  discountPercentage?: number;
  id?: string;
  images?: [String];
  price: number;
  rating?: number;
  stock?: number;
  thumbnail: String;
  title: string;
  quantity: number | 0;
}

export interface productsInterface {
  products: productInterface[];
}
export const PRODUCTS_INITIAL_STATE: productsInterface = {
  products: [] as productInterface[],
};

export const productsSlice = createSlice({
  name: "product",
  initialState: PRODUCTS_INITIAL_STATE,
  reducers: {
    setProducts(state, action: PayloadAction<productInterface[]>) {
      state.products = action.payload;
    },
  },
});

export const productsReducer = productsSlice.reducer;
export const { setProducts } = productsSlice.actions;
