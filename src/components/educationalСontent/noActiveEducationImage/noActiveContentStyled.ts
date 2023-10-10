import styled from "styled-components";
import { breakpoints } from "../../../constants";

export const MainImage = styled.img`
  width: 370px;
  @media (max-width: ${breakpoints.tablet}px) {
    display: none;
  }
`;

export const SmallImage = styled.img`
  display: none;
  @media (max-width: ${breakpoints.tablet}px) {
    display: block;
  }
  @media (max-width: ${breakpoints.mobile}px) {
    display: none;
  }
`;
