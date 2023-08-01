import styled from "styled-components";

export const CategoryContent = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.73);
  z-index: 3;
  display: flex;
  flex-direction: column;
  bottom: -70%;
  color: white;
  transition: 0.3s;
  text-transform: capitalize;
`;

export const CategoryItemContainer = styled.div`
  margin: 1rem;
  position: relative;
  overflow: hidden;
  &:hover ${CategoryContent} {
    bottom: 0;
    justify-content: center;
  }
`;

export const CategoryItemImg = styled.img`
  max-width: 100%;
  width: 100%;
  min-height: 100%;
  max-height: 30vh;
  object-fit: cover;
  z-index: 2;
`;

export const CategoryName = styled.p`
  font-size: 3rem;
  font-weight: 300;
  justify-self: start;
  margin: 0.5rem 1rem;
`;

export const CategoryBtn = styled.button`
  width: 60%;
  border: none;
  background: none;
  color: white;
  text-align: left;
  font-size: 1.5rem;
  font-weight: 100;
  margin: 1rem;
  border-radius: 5px;
  &:hover {
    background-color: white;
    color: black;
    font-weight: 500;
  }
`;
