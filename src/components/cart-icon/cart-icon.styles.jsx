import { styled } from "styled-components";
import { ReactComponent as CartSvg } from "../../assets/shopping-bag.svg";
import { devices } from "../../assets/constants";

export const CartContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 35px;
  height: 35px;
  margin: auto 1rem;
  ${devices.mobile} {
    width: 15px;
    height: 15px;
  }
  ${devices.tab} {
    width: 25px;
    height: 25px;
  }
`;
export const CartSvgContainer = styled(CartSvg)`
  width: 35px;
  height: 35px;
  position: absolute;
  ${devices.mobile} {
    width: 25px;
    height: 25px;
  }
  ${devices.tab} {
    width: 25px;
    height: 25px;
  }
`;

export const CartQuantity = styled.p`
  margin: unset;
  margin-top: 5px;
`;
