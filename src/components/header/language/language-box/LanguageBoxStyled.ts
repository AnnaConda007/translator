import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const StyledLanguageBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "90px",
  backgroundColor: theme.palette.primary.main,
  zIndex: "1",
}));
