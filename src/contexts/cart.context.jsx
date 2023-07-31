import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  cartItems: [],
  setCartItems: () => {},
  addToCart: () => {},
  count: 0,
  modifyQuantity: () => {},
  removeCartItem: () => {},
  totalPrice: 0,
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const updateCount = () => {
      const newCount = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
      setCount(newCount);
    };
    const updateTotal = () => {
      const totalamt = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      setTotalPrice(totalamt);
    };
    // const updateCart = () => {
    //   cartItems.map((item) => {
    //     if (item.quantity === 0) {
    //       removeCartItem(item);
    //     }
    //   });
    // };
    updateTotal();
    // updateCart();
    updateCount();
  }, [cartItems]);

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
    return setCartItems(cartItemsList);
  };
  const modifyQuantity = (product, func) => {
    // Create a new array using map to avoid modifying the original array.
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

    setCartItems(updatedCartItems);
  };

  const removeCartItem = (product) => {
    // Create a new array using filter to avoid modifying the original array.
    const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
    setCartItems(updatedCartItems);
  };
  const value = {
    cartItems,
    setCartItems,
    addToCart,
    count,
    modifyQuantity,
    removeCartItem,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
