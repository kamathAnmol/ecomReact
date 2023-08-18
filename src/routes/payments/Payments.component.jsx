import React, { useState } from "react";
import PayButton from "../../components/payButton/paybutton.component";
import {
  PaymentHead,
  PaymentsContainer,
  TotalP,
  TotalText,
  Wrapper,
} from "./payments.styles";
import { useSelector } from "react-redux";
import { selectCart } from "../../store/cart/cart.selector";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { selectCurrentUser } from "../../store/user/user.selector";

function PaymentsPage() {
  const { total } = useSelector(selectCart);
  const stripe = useStripe();
  const elements = useElements();
  const currentUser = useSelector(selectCurrentUser);
  const [isPaymentProcessing, setisPaymentProcessing] = useState(false);
  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setisPaymentProcessing(true);
    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        amount: total * 100,
      }),
    }).then((res) => res.json());
    const {
      paymentIntent: { client_secret },
    } = response;
    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser !== null ? currentUser.displayName : "guest",
        },
      },
    });
    setisPaymentProcessing(false);
    if (paymentResult.error) {
      console.error(paymentResult.error);
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("successful");
      }
    }
  };
  return (
    <PaymentsContainer onSubmit={paymentHandler}>
      <PaymentHead>Enter Card Deatils for payment</PaymentHead>
      <CardElement />
      <Wrapper>
        <PayButton disabled={isPaymentProcessing}></PayButton>
        <div>
          <TotalText>Total</TotalText>
          <TotalP>{`$${total}`}</TotalP>
        </div>
      </Wrapper>
    </PaymentsContainer>
  );
}

export default PaymentsPage;
