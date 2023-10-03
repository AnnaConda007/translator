import { Button, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootStoreState } from '../../../redux/store';
import { useState } from 'react';
import UpdateLanguage from '../update-language/UpdateLanguage';
import styles from "./SelectedLaguage.module.css"


const SelectedLanguage: React.FC = () => {
  const selectedLanguage = useSelector((state: RootStoreState) => state.language);
  const [languageClicked, setLanguageClicked] = useState<boolean>(false)

  const toogleVisibilityUpdateLang = () => {
    setLanguageClicked(!languageClicked)
  }

  return (
    <Box >
      <Button className={`${styles.languageButton} ${languageClicked && styles.languageButtonClicked}`} onClick={toogleVisibilityUpdateLang}>
        {selectedLanguage}
      </Button>
      {languageClicked && <UpdateLanguage setLanguageClicked={setLanguageClicked} />}
    </Box>
  )
}
export default SelectedLanguage


