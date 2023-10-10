import { Box } from "@mui/material";
import HeaderStyled from "./HeaderStyled";
import HomeButton from "./HomeButton";
import LanguageButton from "./language/language-button/LaguageButton";
import LogOutButton from "./logOutButton/LogOutButton";

const Header = () => {
  return (
    <HeaderStyled>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <LanguageButton />
        <HomeButton />
      </Box>
      <LogOutButton />
    </HeaderStyled>
  );
};

export default Header;
