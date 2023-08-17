import { productReducerTypes } from "./products.types";

export const PRODUCTS_INITIAL_STATE = {
  products: [],
  isLoading: false,
  error: null,
};

export const productsReducer = (
  state = PRODUCTS_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;
  switch (type) {
    case productReducerTypes.FETCH_PRODUCTS_START:
      return { ...state, isLoading: true };
    case productReducerTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: payload,
        isLoading: false,
      };
    case productReducerTypes.FETCH_PRODUCTS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};
