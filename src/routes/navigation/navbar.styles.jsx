import { Link } from "react-router-dom";
import { styled } from "styled-components";

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
`;
export const NavLogo = styled(Link)`
  margin-left: 5rem;
  display: block;
`;

export const NavLinks = styled.div`
  display: flex;
  justify-content: space-around;
  width: 40%;
  text-decoration: none;
  color: black;
`;

export const NavLink = styled(Link)`
  font-size: 2rem;
  font-weight: 300;
  margin: auto 1rem;
`;
