import {
  ShopImgContainer,
  ShopItemBtn,
  ShopItemContent,
  ShopItemContainer,
  ShopItemImg,
} from "./shopItem.styles";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../store/cart/cart.selector";
import { setCartItems } from "../../store/cart/cart.reducer";

function ShopItem({ product }) {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(selectCart);

  const addToCart = (product) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === product.id
    );

    if (existingCartItem) {
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.id === product.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
      dispatch(setCartItems(updatedCartItems));
    } else {
      const newCartItem = { ...product, quantity: 1 };
      dispatch(setCartItems([...cartItems, newCartItem]));
    }
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
        <p style={{ overflow: "hidden", textAlign: "left" }}>{product.title}</p>
        <p style={{ textAlign: "right" }}>
          <b>Rs.</b>
          {product.price}
        </p>
      </ShopItemContent>
    </ShopItemContainer>
  );
}

export default ShopItem;
