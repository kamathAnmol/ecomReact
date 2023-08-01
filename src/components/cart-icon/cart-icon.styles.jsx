import { styled } from "styled-components";
import { ReactComponent as CartSvg } from "../../assets/shopping-bag.svg";

export const CartContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 35px;
  height: 35px;
  margin: auto 1rem;
`;
export const CartSvgContainer = styled(CartSvg)`
  width: 35px;
  height: 35px;
  position: absolute;
`;

export const CartQuantity = styled.p`
  margin: unset;
  margin-top: 5px;
`;
