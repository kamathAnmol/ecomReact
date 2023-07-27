import React from "react";
import { ReactComponent as CartSvg } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
function CartIcon(props) {
  return (
    <div className="cart-container" {...props}>
      <CartSvg className="cart-svg"></CartSvg>
      <p className="cart-quantity">10</p>
    </div>
  );
}

export default CartIcon;
