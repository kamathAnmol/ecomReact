import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import {
  CartContainer,
  CartQuantity,
  CartSvgContainer,
} from "./cart-icon.styles";
function CartIcon(props) {
  const { count } = useContext(CartContext);
  return (
    <CartContainer {...props}>
      <CartSvgContainer className="cart-svg" />
      <CartQuantity className="cart-quantity">{count}</CartQuantity>
    </CartContainer>
  );
}

export default CartIcon;
