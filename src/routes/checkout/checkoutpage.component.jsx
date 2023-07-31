import React from "react";
import "./checkoutpage.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "bootstrap/dist/css/bootstrap.min.css";
import { ChevronRight, ChevronLeft, Trash2, CreditCard } from "lucide-react";
function CheckOutPage() {
  const { cartItems, modifyQuantity, removeCartItem, totalPrice } =
    useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-head">
        <h1>Checkout</h1>
        <p>
          Total : <b> ${totalPrice}</b>
        </p>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col" style={{ width: "30%" }}>
              Product
            </th>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => {
            return (
              <tr key={item.id}>
                <th scope="row">
                  <img
                    src={item.thumbnail}
                    alt=""
                    className="img-thumbnail img-fluid checkout-img"
                  />
                </th>
                <td>
                  <b>{item.title}</b>
                </td>
                <td>
                  <div className="quantity-container">
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
                        // addToCart(item);
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
              </tr>
            );
          })}
        </tbody>
      </table>
      {cartItems.length > 0 && (
        <div className="checkout-footer">
          <p>
            Total : <b>${totalPrice}</b>
          </p>
          <button>
            Checkout
            <CreditCard size={48} strokeWidth={1} />
          </button>
        </div>
      )}
    </div>
  );
}

export default CheckOutPage;
