import styled from "styled-components";
import { devices } from "../../assets/constants";

export const ShopContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  ${devices.mobile} {
    grid-template-columns: 1fr 1fr;
  }
  ${devices.tab} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
