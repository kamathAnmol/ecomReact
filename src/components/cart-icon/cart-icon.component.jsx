import {
  CartContainer,
  CartQuantity,
  CartSvgContainer,
} from "./cart-icon.styles";
import { useSelector } from "react-redux";
import { selectCart } from "../../store/cart/cart.selector";
function CartIcon(props) {
  const { count } = useSelector(selectCart);
  return (
    <CartContainer {...props}>
      <CartSvgContainer className="cart-svg" />
      <CartQuantity className="cart-quantity">{count}</CartQuantity>
    </CartContainer>
  );
}

export default CartIcon;
