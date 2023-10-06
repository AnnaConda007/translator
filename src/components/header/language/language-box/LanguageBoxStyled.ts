import { styled } from '@mui/system';
import { Box } from "@mui/material";


export const StyledLanguageBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "90px",
  backgroundColor: theme.palette.primary.main,
  zIndex: "1"
}))
