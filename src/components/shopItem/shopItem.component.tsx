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
import { productInterface } from "../../store/products/products.reducer";

interface productData{
  product:productInterface
}

function ShopItem({ product }:productData) {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(selectCart);

  const addToCart = (product:productInterface) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === product.id
    );

    if (existingCartItem) {
      const updatedCartItems = cartItems.map((cartItem:productInterface) =>
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
    <ShopItemContainer key={product.id?.toString()}>
      <ShopImgContainer>
        <ShopItemImg src={product.thumbnail?.toString()} alt="" />
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
