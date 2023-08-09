import {
  ShopImgContainer,
  ShopItemBtn,
  ShopItemContent,
  ShopItemContainer,
  ShopItemImg,
} from "./shopItem.styles";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../store/cart/cart.selector";
import { setCartItems } from "../../store/cart/cart.action";

function ShopItem({ product }) {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(selectCart);

  const addToCart = (product) => {
    let cartItemsList = [...cartItems];
    if (cartItemsList.find((cartItem) => cartItem.id === product.id)) {
      cartItemsList.map((cartItem) => {
        if (cartItem.id === product.id) {
          cartItem.quantity += 1;
        }
        return 0;
      });
    } else {
      cartItemsList.push({
        ...product,
        quantity: 1,
      });
    }
    dispatch(setCartItems(cartItemsList));
  };

  return (
    <ShopItemContainer key={product.id}>
      <ShopImgContainer>
        <ShopItemImg src={product.thumbnail} alt="" />
        <ShopItemBtn onClick={() => addToCart(product)}>
          Add to Cart
        </ShopItemBtn>
      </ShopImgContainer>
      <ShopItemContent>
        <p>{product.title}</p>
        <p>
          <b>$</b>
          {product.price}
        </p>
      </ShopItemContent>
    </ShopItemContainer>
  );
}

export default ShopItem;
