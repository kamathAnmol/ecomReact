import { styled } from "styled-components";

export const ShopImgContainer = styled.div`
  position: relative;
  display: flex;
  outline: 2px solid black;
  border-radius: 10px;
  outline-offset: 2px;
`;

export const ShopItemImg = styled.img`
  width: 100%;
  height: 20vh;
  object-fit: cover;
  border-radius: 10px;
`;

export const ShopItemBtn = styled.button`
  position: absolute;
  display: none;
  width: 80%;
  margin: 10px auto;
  border: 1px solid white;
  border-radius: 10px;
  background-color: black;
  color: white;
  height: 5vh;
  font-size: 1.3vw;
  font-weight: 300;
  bottom: 10px;
  left: 10%;
  &:hover {
    background-color: white;
    color: black;
    border-color: black;
  }
`;

export const ShopItemContainer = styled.div`
  margin: 1rem;
  height: max-content;
  border: 2px solid rgba(0, 0, 0, 0);
  padding: 1rem;
  border-radius: 10px;
  &:hover {
    border-color: black;
  }
  &:hover ${ShopItemBtn} {
    display: block;
  }
`;

export const ShopItemContent = styled.span`
  display: flex;
  justify-content: space-between;
  font-size: 1.3vw;
  font-weight: 300;
`;
