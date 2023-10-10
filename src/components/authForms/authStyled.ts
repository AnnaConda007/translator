import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const StyledFormBox = styled(Box)(({ theme }) => ({
  maxWidth: "230px",
  height: "550px",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  backgroundColor: theme.palette.secondary.main,
  padding: "0px 10px",
  borderRadius: "5px",
}));

export const StyledButtonsConteiner = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  borderRadius: "5px",
  minHeight: "300px",
  display: "flex",
  flexWrap: "wrap",
  alignContent: "center",
}));

export const StyledButtonBox = styled(Box)({
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
  width: "100%",
  margin: "10px",
});

export const StyledAuthFormBox = styled(Box)({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignContent: "center",
  height: "100%",
});
