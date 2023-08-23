import "bootstrap/dist/css/bootstrap.min.css";
import { ChevronRight, ChevronLeft, Trash2, CreditCard } from "lucide-react";
import {
  CheckoutContainer,
  CheckoutHead,
  CheckoutFooter,
  CheckoutImg,
  FooterBtn,
  FooterText,
  TableRow,
} from "./checkoutpage.styles";
import { useDispatch, useSelector } from "react-redux";
import { selectCart } from "../../store/cart/cart.selector";
import { setCartItems } from "../../store/cart/cart.reducer";
import { productInterface } from "../../store/products/products.reducer";

function CheckOutPage() {
  const dispatch = useDispatch();
  const { cartItems, total } = useSelector(selectCart);

  const removeCartItem = (product:productInterface) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== product.id);
    dispatch(setCartItems(updatedCartItems));
  };
  const modifyQuantity = (product:productInterface, func:string) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === product.id) {
        const newItem = { ...item };
        if (func === "add") {
          newItem.quantity += 1;
        }
        if (func === "remove") {
          newItem.quantity -= 1;
        }
        return newItem;
      }
      return item;
    });
    dispatch(setCartItems(updatedCartItems));
  };
  return (
    <CheckoutContainer>
      <CheckoutHead>
        <h1>Checkout</h1>
        <p>
          Total : <b> Rs.{total.toString()}</b>
        </p>
      </CheckoutHead>
      <table className="table" style={{ marginBottom: "10rem" }}>
        <thead>
          <tr>
            <th scope="col" style={{ width: "30%" }}>
              Product
            </th>
            <th scope="col" style={{ width: "40%" }}>
              Name
            </th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => {
            return (
              <TableRow key={item.id?.toString()}>
                <th scope="row">
                  <CheckoutImg src={item.thumbnail?.toString()} alt="" />
                </th>
                <td>
                  <b>{item.title}</b>
                </td>
                <td>
                  <div>
                    <ChevronLeft
                      color="#000000"
                      strokeWidth={1}
                      onClick={() => {
                        if (item.quantity > 1) {
                          modifyQuantity(item, "remove");
                        }
                      }}
                    />
                    {item.quantity}
                    <ChevronRight
                      color="#000000"
                      strokeWidth={1}
                      onClick={() => {
                        modifyQuantity(item, "add");
                      }}
                    />
                  </div>
                </td>
                <td>Rs.{item.price}</td>
                <td>
                  <Trash2
                    onClick={() => {
                      removeCartItem(item);
                    }}
                  />
                </td>
              </TableRow>
            );
          })}
        </tbody>
      </table>
      {cartItems.length > 0 && (
        <CheckoutFooter>
          <FooterText>
            Total : <b>Rs.{total.toString()}</b>
          </FooterText>
          <FooterBtn to="/payment">
            Checkout
            <CreditCard size={48} strokeWidth={1} />
          </FooterBtn>
        </CheckoutFooter>
      )}
    </CheckoutContainer>
  );
}

export default CheckOutPage;
