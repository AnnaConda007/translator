import { List, ListItemButton, ListItemText, Box } from "@mui/material";
import { setLanguage } from '../../../redux/languageSlice';
import { useDispatch, useSelector } from "react-redux";
import { specifyLanguage } from '../../../utils/updateData/specifyLanguage';
import { RootStoreState } from '../../../redux/store';
import { toggleVisibilityMenuItem } from '../../../redux/visibilitySlice ';
import { useState, useCallback } from 'react';
import { DataBasePoints } from '../../../enums/dataBasePointsEnum';
import LanguagePopover from '../updateLanguagePopover/UpdateLanguagePopover';
import { languages } from '../../../contains';
import styles from "./updateLanguage.module.css"

interface UpdateLanguageProps {
  setLanguageClicked: (value: boolean) => void
}

const UpdateLanguage: React.FC<UpdateLanguageProps> = ({ setLanguageClicked }) => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector((state: RootStoreState) => state.language);
  const [pickedLanguage, setPickedLanguage] = useState("")
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleLanguage = useCallback((e: React.MouseEvent<HTMLElement>, languageCode: string) => {
    setAnchorEl(e.currentTarget);
    setPickedLanguage(languageCode);
    return;
  }, [selectedLanguage]);

  const selectLanguage = useCallback(async (languageCode: string) => {
    localStorage.setItem(DataBasePoints.LANGUAGE, languageCode);
    dispatch(setLanguage(languageCode));
    await specifyLanguage(languageCode);
    dispatch(toggleVisibilityMenuItem(""));
  }, []);

  return (
    <Box className={styles.languageList}>
      <List>
        {languages.map((language) => {
          const keyName = Object.keys(language)[0];
          const languageCode = language[keyName];
          return (
            <ListItemButton key={languageCode} sx={{
              padding: '2px 0',
              backgroundColor: selectedLanguage === languageCode ? 'lightblue' : 'inherit'
            }} dense onClick={(e) => handleLanguage(e, languageCode)}
            >
              <ListItemText
                primary={keyName}
              />
            </ListItemButton>
          );
        })}
        <LanguagePopover anchorEl={anchorEl} setAnchorEl={setAnchorEl} selectLanguage={selectLanguage} pickedLanguage={pickedLanguage} setLanguageClicked={setLanguageClicked} />
      </List>
    </Box>

  );

};

export default UpdateLanguage;