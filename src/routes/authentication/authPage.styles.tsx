import styled from "styled-components";
import { devices } from "../../assets/constants";

export const AuthPageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5rem;
  margin: 5rem auto;
  width: max-content;
  h1 {
    text-align: center;
    padding: 0.5rem 1rem;
    background-color: #000000;
    width: max-content;
    border-radius: 5px;
    margin: 2rem 0;
    color: white;
  }
  ${devices.mobile} {
    grid-template-columns: 1fr;
    margin: 0.5rem auto;
  }
  ${devices.tab} {
    grid-template-columns: 1fr 1fr;
    h1 {
      margin: 1rem 0;
    }
  }
`;

export const GoogleLoginContainer = styled.div`
  align-self: center;
`;

export const GoogleLoginBtn = styled.button`
  max-width: 320px;
  display: flex;
  padding: 0.5rem 1.4rem;
  font-size: 1vw;
  line-height: 1.25rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  vertical-align: middle;
  align-items: center;
  border-radius: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.25);
  gap: 0.75rem;
  color: rgb(65, 63, 63);
  background-color: #fff;
  cursor: pointer;
  transition: all 0.6s ease;
  max-height: 50px;
  & svg {
    height: 24px;
  }
  &:hover {
    transform: scale(1.02);
  }
  ${devices.mobile} {
    font-size: 3vw;
  }
  ${devices.tab} {
    font-size: 2vw;
  }
`;
