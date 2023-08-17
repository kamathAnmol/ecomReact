import { CreateAction } from "../../utils/reducers/reducer.util";
import { productReducerTypes } from "./products.types";

export const fetchProductStart = () =>
  CreateAction(productReducerTypes.FETCH_PRODUCTS_START);

export const fetchProductSuccess = (products) =>
  CreateAction(productReducerTypes.FETCH_PRODUCTS_SUCCESS, products);

export const fetchProductFailed = (error) =>
  CreateAction(productReducerTypes.FETCH_PRODUCTS_FAILED, error);
