import { styled } from "styled-components";

export const CartItemContainer = styled.div`
  width: 90%;
  margin: 2px auto;
  padding: 3px;
  display: flex;
  border: 1px solid black;
  object-fit: cover;
  align-items: center;
`;

export const CartItemImg = styled.img`
  width: 75px;
  height: 75px;
  outline: 1px solid black;
`;

export const Wrapper = styled.div`
  margin-left: 3px;
  width: 80%;
`;

export const CartItemName = styled.p`
  font-size: 1vw;
  width: 100%;
  font-weight: 500;
`;

export const InnerWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 3px;
`;
