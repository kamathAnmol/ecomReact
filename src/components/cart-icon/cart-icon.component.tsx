import {
  CartContainer,
  CartQuantity,
  CartSvgContainer,
} from "./cart-icon.styles";
import { useSelector } from "react-redux";
import { selectCart } from "../../store/cart/cart.selector";
import { cartInterface } from "../../store/cart/cart.reducer";
interface propsInterface{
  onClick:()=>void;
}
function CartIcon(props:propsInterface) {
  const cartData:cartInterface = useSelector(selectCart);
  const count:Number = cartData.count;
  return (
    <CartContainer {...props}>
      <CartSvgContainer className="cart-svg" strokeWidth={1}/>
      <CartQuantity className="cart-quantity">{count.toString()}</CartQuantity>
    </CartContainer>
  );
}

export default CartIcon;
