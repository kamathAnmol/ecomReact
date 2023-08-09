import React from "react";
import { useState } from "react";
import CartItem from "../cart-item/cartItem.component";
import {
  CheckoutBtnContainer,
  CheckoutBtn,
  CartContainer,
  CartItemContainer,
  EmptyCartString,
} from "./cartdd.styles";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../store/cart/cart.selector";
import { setDropDown } from "../../store/cart/cart.action";

function CartDropdown() {
  // const { cartItems, setShowDD } = useContext(CartContext);
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const { cartItems } = useSelector(selectCart);
  const dispatch = useDispatch();
  return (
    <CartContainer
      onMouseEnter={() => setIsMouseEnter(true)}
      onMouseLeave={() => {
        if (isMouseEnter) dispatch(setDropDown(false));
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
