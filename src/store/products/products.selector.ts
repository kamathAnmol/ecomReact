import { createSelector } from "reselect";
import { rootInterface } from "../root-reducer";

const getProductsState = (state: rootInterface) => state.products.products;

export const selectProducts = createSelector(
  [getProductsState],
  (products) => products
);
