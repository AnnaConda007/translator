import { Button } from "@mui/material";
import { styled } from "@mui/system";

export const StyledLanguageButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  position: "relative",
  width: "90px",
  borderRadius: "0",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    borderRadius: "5px",
  },
}));
