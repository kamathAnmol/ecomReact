import { createSelector } from "reselect";

const getProductsState = (state) => state.products.products;
const getCategoriesState = (state) => state.products.categories;

export const selectProducts = createSelector(
  [getProductsState],
  (products) => products
);

export const selectCategories = createSelector(
  [getCategoriesState],
  (categories) => categories
);
