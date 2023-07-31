import { ReactComponent as CartSvg } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
function CartIcon(props) {
  const { count } = useContext(CartContext);
  return (
    <div className="cart-container" {...props}>
      <CartSvg className="cart-svg"></CartSvg>
      <p className="cart-quantity">{count}</p>
    </div>
  );
}

export default CartIcon;
