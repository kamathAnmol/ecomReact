import React from "react";
import "./shopItem.styles.scss";
function ShopItem({ product }) {
  return (
    <div className="shop-item">
      <div className="shop-img-container">
        <img src={product.thumbnail} alt="" className="shop-item-img" />
        <button className="shop-item-btn">Add to Cart</button>
      </div>
      <span className="shop-item-content">
        <p className="shop-item-title">{product.title}</p>
        <p className="shop-item-price">
          {product.price}
          <b>$</b>
        </p>
      </span>
    </div>
  );
}

export default ShopItem;
