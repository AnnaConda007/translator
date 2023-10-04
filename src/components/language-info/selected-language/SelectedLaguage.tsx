import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootStoreState } from '../../../redux/store';
import { useState } from 'react';
import UpdateLanguage from '../update-language/UpdateLanguage';
import { StyledLanguageButton } from './selectedLanguageStyled';

const SelectedLanguage: React.FC = () => {
  const selectedLanguage = useSelector((state: RootStoreState) => state.language);
  const [languageClicked, setLanguageClicked] = useState<boolean>(false)

  const toogleVisibilityUpdateLang = () => {
    setLanguageClicked(!languageClicked)
  }

  return (
    <Box >
      <StyledLanguageButton active={languageClicked} onClick={toogleVisibilityUpdateLang}>
        {selectedLanguage}
      </StyledLanguageButton>
      {languageClicked && <UpdateLanguage setLanguageClicked={setLanguageClicked} />}
    </Box>
  )
}
export default SelectedLanguage


