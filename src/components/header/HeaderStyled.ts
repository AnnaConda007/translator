import { Box } from "@mui/material";
import styled from "styled-components";
import { breakpoints } from "../../constants";

const HeaderStyled = styled(Box)`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  z-index: 1;

  @media (max-width: ${breakpoints.mobile}px) {
    padding: 5px 0px;
    margin-top: 0px;
  }
`;

export default HeaderStyled;
