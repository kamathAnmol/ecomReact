import React from "react";
import { useContext } from "react";
import ShopItem from "../../components/shopItem/shopItem.component";
import "./shop.styles.scss";
import { ProductContext } from "../../contexts/products.context";
function ShopPage() {
  const { products } = useContext(ProductContext);
  return (
    <div className="shop-container">
      {products.map((product) => {
        return <ShopItem product={product} key={product.key}></ShopItem>;
      })}
    </div>
  );
}

export default ShopPage;
