import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  ShopImgContainer,
  ShopItemBtn,
  ShopItemContent,
  ShopItemContainer,
  ShopItemImg,
} from "./shopItem.styles";

function ShopItem({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <ShopItemContainer>
      <ShopImgContainer>
        <ShopItemImg src={product.thumbnail} alt="" />
        <ShopItemBtn onClick={() => addToCart(product)}>
          Add to Cart
        </ShopItemBtn>
      </ShopImgContainer>
      <ShopItemContent>
        <p>{product.title}</p>
        <p>
          <b>$</b>
          {product.price}
        </p>
      </ShopItemContent>
    </ShopItemContainer>
  );
}

export default ShopItem;
