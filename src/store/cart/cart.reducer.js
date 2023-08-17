import { createSlice } from "@reduxjs/toolkit";

export const INITIAL_STATE = {
  cartItems: [],
  count: 0,
  total: 0,
  dropDown: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    setCartItems(state, action) {
      state.cartItems = action.payload;
    },
    setDropDown(state, action) {
      state.dropDown = action.payload;
    },
    updateCountTotal(state, action) {
      state.count = action.payload.count;
      state.total = action.payload.total;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { setCartItems, setDropDown, updateCountTotal } =
  cartSlice.actions;

// export const cartReducer = (state = INITIAL_STATE, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case CART_REDUCER_TYPES.SET_CART_ITEMS:
//       return {
//         ...state,
//         cartItems: payload,
//       };
//     case CART_REDUCER_TYPES.SET_SHOW_CART:
//       return {
//         ...state,
//         dropDown: payload,
//       };
//     case CART_REDUCER_TYPES.UPDATE_COUNT_TOTAL:
//       return {
//         ...state,
//         ...payload,
//       };
//     default:
//       return state;
//   }
// };
