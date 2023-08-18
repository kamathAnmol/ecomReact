import React from "react";
import {
  CartItemContainer,
  CartItemImg,
  Wrapper,
  InnerWrapper,
  CartItemName,
} from "./cartItem.styles";

function CartItem({ cartItem }) {
  return (
    <CartItemContainer>
      <CartItemImg src={cartItem.thumbnail} alt={cartItem.name} />
      <Wrapper>
        <CartItemName>{cartItem.title}</CartItemName>
        <InnerWrapper>
          <p>
            Rs.<b>{cartItem.price}</b>
          </p>
          <p>
            x<b>{cartItem.quantity}</b>
          </p>
        </InnerWrapper>
      </Wrapper>
    </CartItemContainer>
  );
}

export default CartItem;
