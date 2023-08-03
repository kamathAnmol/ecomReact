import React from "react";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cartItem.component";
import {
  CheckoutBtnContainer,
  CheckoutBtn,
  CartContainer,
  CartItemContainer,
  EmptyCartString,
} from "./cartdd.styles";

function CartDropdown() {
  const { cartItems, setShowDD } = useContext(CartContext);
  const [isMouseEnter, setIsMouseEnter] = useState(false);

  return (
    <CartContainer
      onMouseEnter={() => setIsMouseEnter(true)}
      onMouseLeave={() => {
        if (isMouseEnter) setShowDD(false);
      }}
    >
      <CartItemContainer>
        {cartItems.length > 0 ? (
          cartItems.map((cartItem) => {
            return <CartItem cartItem={cartItem} key={cartItem.id}></CartItem>;
          })
        ) : (
          <EmptyCartString>No Items in the Cart</EmptyCartString>
        )}
      </CartItemContainer>
      <CheckoutBtnContainer to="checkout">
        <CheckoutBtn>Go to Chekout</CheckoutBtn>
      </CheckoutBtnContainer>
    </CartContainer>
  );
}

export default CartDropdown;
