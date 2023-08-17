import { createSelector } from "reselect";

const getProductsState = (state) => state.products.products;

export const selectProducts = createSelector(
  [getProductsState],
  (products) => products
);
