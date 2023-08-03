import { Link } from "react-router-dom";
import styled from "styled-components";

export const CheckoutBtnContainer = styled(Link)`
  align-self: center;
  width: 80%;
`;

export const CheckoutBtn = styled.button`
  width: 100%;
  margin: 1rem auto;
  border: none;
  outline: 2px black solid;
  outline-offset: 2px;
  border-radius: 10px;
  background-color: black;
  color: white;
  height: 5vh;
  font-size: 1.3vw;
  font-weight: 300;
  transition: 0.3s;
  &:hover {
    background-color: white;
    color: black;
    border-color: black;
    outline-offset: 0;
  }
`;

export const CartContainer = styled.div`
  position: absolute;
  background-color: white;
  width: 30vh;
  bottom: -53vh;
  right: 10%;
  z-index: 999;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 1rem;
`;

export const CartItemContainer = styled.div`
  height: 40vh;
  overflow: scroll;
  display: flex;
  flex-direction: column;
`;

export const EmptyCartString = styled.p`
  text-align: center;
  font-size: 2vw;
  font-weight: 300;
`;
