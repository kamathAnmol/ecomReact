import { createSelector } from "reselect";

const getProductsState = (state) => state.products.products;
const getIsloadingState = (state) => state.products.isLoading;

export const selectProducts = createSelector(
  [getProductsState],
  (products) => products
);

export const selectIsLoading = createSelector(
  [getIsloadingState],
  (isLoading) => isLoading
);
