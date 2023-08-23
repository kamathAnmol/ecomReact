import styled from "styled-components";
import { devices } from "../../assets/constants";

export const CategoryContent = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.73);
  z-index: 3;
  display: flex;
  flex-direction: column;
  bottom: -60%;
  color: white;
  transition: 0.3s;
  text-transform: capitalize;
  ${devices.mobile} {
    bottom: -50%;
  }
  ${devices.mobile} {
    bottom: -50%;
  }
`;

export const CategoryItemContainer = styled.div`
  margin: 1rem;
  position: relative;
  overflow: hidden;
  &:hover ${CategoryContent} {
    bottom: 0;
    justify-content: center;
  }
  ${devices.tab} {
    font-size: 2.5vw;
  }
  ${devices.mobile} {
    font-size: 4vw;
  }
`;

export const CategoryItemImg = styled.img`
  max-width: 100%;
  width: 100%;
  min-height: 100%;
  max-height: 20vh;
  object-fit: cover;
  z-index: 2;
`;

export const CategoryName = styled.p`
  font-size: 2vw;
  font-weight: 300;
  justify-self: start;
  margin: 0.5rem 1rem;
  ${devices.tab} {
    font-size: 2.5vw;
    margin: 0 1rem;
  }
  ${devices.mobile} {
    font-size: 4vw;
  }
`;

export const CategoryBtn = styled.button`
  width: 60%;
  border: none;
  background: none;
  color: white;
  text-align: left;
  font-size: 1.5vw;
  font-weight: 100;
  margin: 1rem;
  border-radius: 5px;
  &:hover {
    background-color: white;
    color: black;
    font-weight: 500;
  }
  ${devices.mobile} {
    margin: 0 1rem;
    font-size: 3.5vw;
    &:hover {
    }
  }
  ${devices.tab} {
    margin: 0 1rem;
    font-size: 2vw;
    &:hover {
    }
  }
`;
