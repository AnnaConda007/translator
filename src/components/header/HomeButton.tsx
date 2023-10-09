import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { IconButton, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { RoutesApp } from "../../enums/routesAppEnum";
import { useScreenSize } from "../../hooks/useScreenSize";
import {
  toggleVisibilityMenuItem,
  toggleVisibilityMenuOpen,
} from "../../redux/visibilitySlice ";

const HomeButton = () => {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const isMobile = useScreenSize();
  const location = useLocation();
  const homePath = location.pathname === RoutesApp.HOME;

  const handleHome = () => {
    if (homePath) {
      dispath(toggleVisibilityMenuOpen(true));
      dispath(toggleVisibilityMenuItem(""));
      return;
    }
    navigate(RoutesApp.HOME);
  };

  return (
    <>
      {(isMobile || !homePath) && (
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={handleHome}>
            <HomeOutlinedIcon />
          </IconButton>
        </Box>
      )}
    </>
  );
};

export default HomeButton;
