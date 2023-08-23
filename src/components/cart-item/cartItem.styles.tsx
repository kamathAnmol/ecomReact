import { styled } from "styled-components";
import { devices } from "../../assets/constants";

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
  min-width: 75px;
  max-width: 75px;
  height: 75px;
  outline: 1px solid black;
  object-fit: cover;
`;

export const Wrapper = styled.div`
  margin-left: 3px;
  width: 80%;
  align-self: flex-start;
`;

export const CartItemName = styled.p`
  font-size: 1vw;
  width: 100%;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
  margin: 0;
  ${devices.mobile} {
    font-size: 3vw;
  }
  ${devices.tab} {
    font-size: 2vw;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 3px;
  p {
    margin: unset;
  }
`;
