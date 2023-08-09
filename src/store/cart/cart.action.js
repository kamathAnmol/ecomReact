import { CreateAction } from "../../utils/reducers/reducer.util";

import { CART_REDUCER_TYPES } from "./cart.types";

export const setCartItems = (cartItems, count, total) => {
  return CreateAction(CART_REDUCER_TYPES.SET_CART_ITEMS, cartItems);
};

export const setDropDown = (dropDown) => {
  return CreateAction(CART_REDUCER_TYPES.SET_SHOW_CART, dropDown);
};

export const updateCountTotal = (count, total) => {
  return CreateAction(CART_REDUCER_TYPES.UPDATE_COUNT_TOTAL, { count, total });
};
