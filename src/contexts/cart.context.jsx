import { createContext, useReducer } from "react";
import { CreateAction } from "../utils/reducers/reducer.util";

export const CartContext = createContext({
  cartItems: [],
  setCartItems: () => {},
  addToCart: () => {},
  count: 0,
  modifyQuantity: () => {},
  removeCartItem: () => {},
  totalPrice: 0,
  showDD: Boolean,
  setShowDD: () => {},
});

const initialState = {
  cartItems: [],
  count: 0,
  totalPrice: 0,
  showDD: false,
};

const CART_REDUCER_TYPES = {
  SET_CART_ITEMS: `SET_CART_ITEMS`,
  SET_SHOW_DD: `SET_SHOW_DD`,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_REDUCER_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_REDUCER_TYPES.SET_SHOW_DD:
      return {
        ...state,
        showDD: payload,
      };

    default:
      throw new Error("inavlid handler in cart Reducer");
  }
};

export const CartProvider = ({ children }) => {
  const [{ cartItems, totalPrice, count, showDD }, dispatch] = useReducer(
    cartReducer,
    initialState
  );

  const updateCart = (newCartItems) => {
    const newCount = newCartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    const totalamt = newCartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    dispatch(
      CreateAction(CART_REDUCER_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems,
        count: newCount,
        totalPrice: totalamt,
      })
    );
  };

  const addToCart = (product) => {
    let cartItemsList = [...cartItems];
    if (cartItemsList.find((cartItem) => cartItem.id === product.id)) {
      cartItemsList.map((cartItem) => {
        if (cartItem.id === product.id) {
          cartItem.quantity += 1;
        }
        return 0;
      });
    } else {
      cartItemsList.push({
        ...product,
        quantity: 1,
      });
    }
    return updateCart(cartItemsList);
  };
  const modifyQuantity = (product, func) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === product.id) {
        if (func === "add") {
          item.quantity += 1;
        }
        if (func === "remove") {
          item.quantity -= 1;
        }
      }
      return item;
    });
    updateCart(updatedCartItems);
  };

  const removeCartItem = (product) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
    updateCart(updatedCartItems);
  };
  const setShowDD = (value) => {
    dispatch(CreateAction(CART_REDUCER_TYPES.SET_SHOW_DD, value));
  };
  const value = {
    cartItems,
    addToCart,
    count,
    modifyQuantity,
    removeCartItem,
    totalPrice,
    showDD,
    setShowDD,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
