import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const AddNewBookBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
  position: "absolute",
  borderRadius: "5px",
  bottom: "10px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  maxWidth: "230px",
}));
