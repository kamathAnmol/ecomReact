import { createSelector } from "reselect";

const cartState = (state) => state.cart;

export const selectCart = createSelector([cartState], (cart) => cart);
