import { CART_REDUCER_TYPES } from "./cart.types";

export const INITIAL_STATE = {
  cartItems: [],
  count: 0,
  total: 0,
  dropDown: false,
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_REDUCER_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    case CART_REDUCER_TYPES.SET_SHOW_CART:
      return {
        ...state,
        dropDown: payload,
      };
    case CART_REDUCER_TYPES.UPDATE_COUNT_TOTAL:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
