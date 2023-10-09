import { Box } from "@mui/material"; 
import LanguageButton from "./language/language-button/LaguageButton";
import LogOutButton from "./logOutButton/LogOutButton"; 
import HeaderStyled from './HeaderStyled';
import HomeButton from './HomeButton';

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
