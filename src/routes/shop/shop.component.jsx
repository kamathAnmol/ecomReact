import React from "react";
import { useContext } from "react";
import ShopItem from "../../components/shopItem/shopItem.component";
import { ProductContext } from "../../contexts/products.context";
import { ShopContainer } from "./shop.styles";
function ShopPage() {
  const { products } = useContext(ProductContext);
  return (
    <ShopContainer>
      {products.map((product) => {
        return <ShopItem product={product} key={product.id}></ShopItem>;
      })}
    </ShopContainer>
  );
}

export default ShopPage;
