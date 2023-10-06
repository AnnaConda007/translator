import { styled } from '@mui/system';
import { Button } from "@mui/material";


export const StyledLanguageButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  position: "relative",
  width: "90px",
  borderRadius: "0",
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    borderRadius: "5px"
  },
}));
