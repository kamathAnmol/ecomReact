import { styled } from "styled-components";

export const PaymentsContainer = styled.form`
  width: 30%;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
    rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  padding: 2rem;
  border-radius: 10px;
  margin: 1rem auto;
`;

export const PaymentHead = styled.h1`
  font-size: 1.8rem;
  font-weight: 300;
  margin: 0 0 1rem 0;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3rem 2rem 1rem 2rem;
  align-items: center;
`;

export const TotalText = styled.p`
  font-size: 2vh;
  text-align: right;
`;

export const TotalP = styled.p`
  font-size: 5vh;
  font-weight: 700;
`;
