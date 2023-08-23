import { styled } from "styled-components";

export const PayButtonStyled = styled.button`
  background: #f7971e;
  background: -webkit-linear-gradient(to right, #ffd200, #f7971e);
  background: linear-gradient(to right, #ffd200, #f7971e);

  border-radius: 10px;
  border: unset;
  padding: 1rem 5rem;
  font-size: 1.3rem;
  font-weight: 300;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;
  transition: 0.3s;
  height: 9vh;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  }
`;
