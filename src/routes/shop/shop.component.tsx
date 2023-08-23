import React from "react";
import ShopItem from "../../components/shopItem/shopItem.component";
import { ShopContainer } from "./shop.styles";
import { useSelector } from "react-redux";
import { selectProducts } from "../../store/products/products.selector";
function ShopPage() {
  const products = useSelector(selectProducts);
  return (
    <ShopContainer>
      {products.map((product) => {
        return <ShopItem product={product} key={product.id}></ShopItem>;
      })}
    </ShopContainer>
  );
}

export default ShopPage;
