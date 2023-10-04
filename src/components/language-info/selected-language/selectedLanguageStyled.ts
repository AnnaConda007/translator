import { styled } from '@mui/system';
import { Button } from "@mui/material";

interface StyledLanguageButtonProps {
  active?: boolean
}
export const StyledLanguageButton = styled(Button)<StyledLanguageButtonProps>(({ active = false }) => ({
  backgroundColor: active ? "var(--primary-color)" : "",
  color: 'var(--dark-color)',
  position: "relative",
  width: "86px",
  borderRadius: "0",
  '&:hover': {
    backgroundColor: "var(--primary-color)",
  },
}));
