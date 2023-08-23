import { createSelector } from "reselect";
import { rootInterface } from "../root-reducer";

const cartState = (state: rootInterface) => state.cart;

export const selectCart = createSelector([cartState], (cart) => cart);
