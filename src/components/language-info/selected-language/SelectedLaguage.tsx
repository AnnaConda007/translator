
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { RootStoreState } from '../../../redux/store';
import { useState } from 'react';
import UpdateLanguage from '../update-language/UpdateLanguage';

const SelectedLanguage: React.FC = () => {
  const selectedLanguage = useSelector((state: RootStoreState) => state.language);
  const [languageClicked, setLanguageClicked] = useState<boolean>(false)

  const toogleVisibilityUpdateLang = () => {
    setLanguageClicked(!languageClicked)
  }
  return (
    <>
      <Button onClick={toogleVisibilityUpdateLang}>
        {selectedLanguage}
      </Button>
      {languageClicked && <UpdateLanguage setLanguageClicked={setLanguageClicked} />}
    </>

  )
}


export default SelectedLanguage