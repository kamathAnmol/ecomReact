import { combineReducers } from "@reduxjs/toolkit";
import { userInterface, userReducer } from "./user/user.reducer";
import {
  productsInterface,
  productsReducer,
} from "./products/products.reducer";
import { cartInterface, cartReducer } from "./cart/cart.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  cart: cartReducer,
});

export interface rootInterface {
  user: userInterface;
  products: productsInterface;
  cart: cartInterface;
}
