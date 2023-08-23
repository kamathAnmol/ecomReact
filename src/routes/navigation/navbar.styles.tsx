import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { devices } from "../../assets/constants";

export const NavbarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  top: 0;
  height: 10vh;
  background-color: white;
  position: fixed;
  z-index: 10;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  align-items: center;
  ${devices.mobile} {
  }
`;
export const NavLogo = styled(Link)`
  margin-left: 5vw;
  display: block;
`;

export const NavLinks = styled.div`
  display: flex;
  justify-content: space-around;
  width: 40%;
  text-decoration: none;
  color: black;
  ${devices.mobile} {
    width: unset;
  }
  ${devices.tab} {
    width: 60%;
  }
  ${devices.pc} {
    width: 65%;
  }
`;

export const NavLink = styled(Link)`
  font-size: 1.4vw;
  font-weight: 300;
  margin: auto 1rem;
  ${devices.mobile} {
    font-size: 3vw;
    font-weight: 600;
    margin: auto 0.7rem;
  }
  ${devices.tab} {
    font-size: 3vw;
    font-weight: 400;
    margin: auto 0.7rem;
  }
  ${devices.pc} {
    font-size: 3vw;
    font-weight: 400;
    margin: auto 1rem;
  }
`;
