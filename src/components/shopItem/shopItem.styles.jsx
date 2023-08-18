import { styled } from "styled-components";
import { devices } from "../../assets/constants";

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
  transition: 0.3s;
  &:hover {
    background-color: white;
    color: black;
    border-color: black;
  }
  ${devices.mobile} {
    display: block;
    font-size: 3vw;
  }
  ${devices.tab} {
    display: block;
    font-size: 2vw;
  }
`;

export const ShopItemContainer = styled.div`
  margin: 1rem;
  height: max-content;
  border: 2px solid rgba(0, 0, 0, 0);
  padding: 1rem;
  border-radius: 10px;
  transition: 0.3s;
  &:hover {
    border-color: black;
  }
  &:hover ${ShopItemBtn} {
    display: block;
  }
  ${devices.mobile} {
    border-color: black;
  }
  ${devices.tab} {
    border-color: black;
  }
`;

export const ShopItemContent = styled.span`
  display: grid;
  grid-template-columns: 2fr 1fr;
  font-size: 1.3vw;
  font-weight: 300;
  margin: 1rem 0.5rem 0 0.5rem;
  width: 100%;
  p {
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  ${devices.mobile} {
    font-size: 3vw;
  }
  ${devices.tab} {
    font-size: 2vw;
  }
`;
