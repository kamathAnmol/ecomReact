import React from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
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

function CheckOutPage() {
  const { cartItems, modifyQuantity, removeCartItem, totalPrice } =
    useContext(CartContext);
  return (
    <CheckoutContainer>
      <CheckoutHead>
        <h1>Checkout</h1>
        <p>
          Total : <b> ${totalPrice}</b>
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
              <TableRow key={item.id}>
                <th scope="row">
                  <CheckoutImg src={item.thumbnail} alt="" />
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
                <td>${item.price}</td>
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
            Total : <b>${totalPrice}</b>
          </FooterText>
          <FooterBtn>
            Checkout
            <CreditCard size={48} strokeWidth={1} />
          </FooterBtn>
        </CheckoutFooter>
      )}
    </CheckoutContainer>
  );
}

export default CheckOutPage;
