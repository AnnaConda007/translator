import { Box } from "@mui/material";
import HeaderStyled from "./header/HeaderStyled";
import HomeButton from "./header/HomeButton";
import LanguageButton from "./header/language/language-button/LaguageButton";
import LogOutButton from "./header/logOutButton/LogOutButton";

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
