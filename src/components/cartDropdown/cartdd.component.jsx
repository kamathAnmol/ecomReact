import React from "react";
import "./cartdd.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cartItem.component";
import { Link } from "react-router-dom";

function CartDropdown() {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-items-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => {
          return <CartItem cartItem={cartItem} key={cartItem.id}></CartItem>;
        })}
      </div>
      <Link to="checkout">
        <button className="cart-btn">Go to Chekout</button>
      </Link>
    </div>
  );
}

export default CartDropdown;
