import styled from "styled-components";
import { devices } from "../../assets/constants";

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 1rem auto;
  width: 100%;
  gap: 1rem;
  ${devices.mobile} {
    grid-template-columns: 1fr 1fr;
  }
  ${devices.tab} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
