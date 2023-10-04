import { useState, useRef } from 'react';
import { useSelector } from "react-redux";
import { RootStoreState } from '../../../redux/store';
import { Box } from "@mui/material";
import UpdateLanguage from '../update-language/UpdateLanguage';
import { StyledLanguageButton } from './selectedLanguageStyled';

const SelectedLanguage: React.FC = () => {
  const selectedLanguage = useSelector((state: RootStoreState) => state.language);
  const [languageClicked, setLanguageClicked] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const toggleVisibilityUpdateLang = () => {
    setLanguageClicked(!languageClicked);
  };


  return (
    <Box>
      <StyledLanguageButton
        active={languageClicked}
        onClick={toggleVisibilityUpdateLang}
        ref={buttonRef}
      >
        {selectedLanguage}
      </StyledLanguageButton>
      {languageClicked && (

        <UpdateLanguage setLanguageClicked={setLanguageClicked} buttonRef={buttonRef} />

      )}
    </Box>
  )
};

export default SelectedLanguage;
