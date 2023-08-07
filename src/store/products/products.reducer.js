import { productReducerTypes } from "./products.types";

export const PRODUCTS_INITIAL_STATE = {
  products: [],
  categories: [],
};

export const productsReducer = (
  state = PRODUCTS_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;
  switch (type) {
    case productReducerTypes.SET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case productReducerTypes.SET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    default:
      return state;
  }
};
