import React, { useContext } from "react";
import "./shopItem.styles.scss";
import { CartContext } from "../../contexts/cart.context";
function ShopItem({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="shop-item">
      <div className="shop-img-container">
        <img src={product.thumbnail} alt="" className="shop-item-img" />
        <button className="shop-item-btn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
      <span className="shop-item-content">
        <p className="shop-item-title">{product.title}</p>
        <p className="shop-item-price">
          <b>$</b>
          {product.price}
        </p>
      </span>
    </div>
  );
}

export default ShopItem;
