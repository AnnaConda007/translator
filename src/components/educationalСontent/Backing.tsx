import { ReactNode } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { StyledWrapBox } from "./Styled";
import { toggleVisibilityMenuItem } from "../../redux/visibilitySlice ";

interface BackingProps {
  children: ReactNode;
}

const Backing: React.FC<BackingProps> = ({ children }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(toggleVisibilityMenuItem(""));
  };
  return (
    <>
      <StyledWrapBox>
        <Button
          onClick={handleClose}
          sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        >
          <CloseIcon />
        </Button>
        {children}
      </StyledWrapBox>
    </>
  );
};

export default Backing;
