import React from "react";
import "./cartItem.styles.scss";
function CartItem({ cartItem }) {
  return (
    <div className="cart-item-container">
      <img
        src={cartItem.thumbnail}
        alt={cartItem.name}
        className="cart-item-img"
      ></img>
      <div className="wrapper">
        <p className="cart-item-name">{cartItem.title}</p>
        <div className="inner-wrapper">
          <p className="cart-item-price">${cartItem.price}</p>
          <p className="cart-item-quantity">
            x<b>{cartItem.quantity}</b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
