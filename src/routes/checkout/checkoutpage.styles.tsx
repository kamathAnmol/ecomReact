import styled from "styled-components";
import { devices } from "../../assets/constants";
import { Link } from "react-router-dom";

export const CheckoutContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-top: 3rem;
  min-height: 90vh;
`;

export const CheckoutHead = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const CheckoutImg = styled.img`
  max-height: 30vh;
  min-width: 100%;
  object-fit: cover;
  max-width: 30%;
  ${devices.mobile} {
    max-height: 10vh;
  }
  ${devices.tab} {
    max-height: 20vh;
  }
`;

export const CheckoutFooter = styled.div`
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.45) 0px -25px 20px -20px;
  width: 100%;
  display: flex;
  height: 15vh;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  margin: auto;
  padding: 1rem 10rem;
  left: 0;
  ${devices.mobile} {
    padding: 1rem;
    height: 10vh;
  }
  ${devices.tab} {
    padding: 1rem;
    height: 12vh;
  }
`;

export const FooterText = styled.p`
  font-size: 2.5vw;
  font-weight: 300;
  margin: unset;
  ${devices.mobile} {
    font-size: 3.5vw;
  }
  ${devices.tab} {
    font-size: 3vw;
  }
`;

export const FooterBtn = styled(Link)`
  border: none;
  background: rgb(255, 169, 1);
  height: 10vh;
  background: linear-gradient(
    90deg,
    rgba(255, 169, 1, 1) 0%,
    rgba(255, 229, 0, 1) 100%
  );
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  font-size: 2vw;
  font-weight: 300;
  border-radius: 8px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  align-items: center;
  transition: font-size 0.3s;
  width: 30vw;
  max-width: 300px;
  &:hover {
    font-size: 2.5vw;
  }
  ${devices.mobile} {
    height: 7vh;
    font-size: 3.5vw;
    width: 40%;
    &:hover {
      font-size: 3.8vw;
    }
  }
  ${devices.tab} {
    height: 7vh;
    font-size: 3.5vw;
    width: 40%;
    &:hover {
      font-size: 3.8vw;
    }
  }
`;

export const TableRow = styled.tr`
  height: 32vh;
  ${devices.mobile} {
    height: 12vh;
  }
  ${devices.tab} {
    height: 22vh;
  }
`;
