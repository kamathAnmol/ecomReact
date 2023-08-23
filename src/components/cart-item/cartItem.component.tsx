import React from "react";
import {
  CartItemContainer,
  CartItemImg,
  Wrapper,
  InnerWrapper,
  CartItemName,
} from "./cartItem.styles";
import { productInterface } from "../../store/products/products.reducer";

interface cartItemProp{
  cartItem:productInterface;
}

function CartItem({ cartItem }:cartItemProp) {
  return (
    <CartItemContainer>
      <CartItemImg src={cartItem.thumbnail?.toString()} alt={cartItem.title?.toString()} />
      <Wrapper>
        <CartItemName>{cartItem.title}</CartItemName>
        <InnerWrapper>
          <p>
            Rs.<b>{cartItem.price?.toString()}</b>
          </p>
          <p>
            x<b>{cartItem.quantity?.toString()}</b>
          </p>
        </InnerWrapper>
      </Wrapper>
    </CartItemContainer>
  );
}

export default CartItem;
