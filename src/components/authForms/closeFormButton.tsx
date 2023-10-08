import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { toggleVisibilityAuthForm } from "../../redux/visibilitySlice ";

const CloseFormButton = () => {
  const dispatch = useDispatch();

  const handleButton = () => {
    dispatch(toggleVisibilityAuthForm(""));
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
      <IconButton onClick={handleButton}>
        <CloseIcon />
      </IconButton>
    </Box>
  );
};

export default CloseFormButton;
