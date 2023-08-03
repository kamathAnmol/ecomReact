import styled from "styled-components";

export const AuthPageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5rem;
  margin: 5rem auto;
  width: max-content;
`;

export const GoogleLoginContainer = styled.div`
  align-self: center;
`;

export const GoogleLoginBtn = styled.button`
  max-width: 320px;
  display: flex;
  padding: 0.5rem 1.4rem;
  font-size: 0.875vw;
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
`;
