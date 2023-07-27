import React from "react";
import "./cartdd.styles.scss";
function CartDropdown() {
  return (
    <div className="cart-items-container">
      <div className="cart-items"></div>
      <button className="cart-btn">Go to Chekout</button>
    </div>
  );
}

export default CartDropdown;
