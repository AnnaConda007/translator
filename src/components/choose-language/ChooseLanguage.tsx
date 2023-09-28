import CheckIcon from "@mui/icons-material/Check";
import { List, ListItemButton, ListItemText } from "@mui/material";
import { setLanguage } from "../../redux/languageSlice";
import { useDispatch } from "react-redux";
import { updateLanguage } from '../../utils/updateDB/updateLanguage';
import { useSelector } from "react-redux";
import { RootStoreState } from "../../redux/store";
import { toggleVisibilityMenuItem } from '../../redux/visibilitySlice ';
import { useState } from 'react';
import { DataBasePoints } from '../../enums/dataBasePointsEnum';
import UpdateLanguagePopover from './updateLanguagePopover/UpdateLanguagePopover';
import { languages } from './languages';
import { useCallback } from 'react';
import { setLanguageRecorderInDB } from '../../redux/authSlise';

const ChooseLanguage: React.FC = () => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector((state: RootStoreState) => state.language);
  console.log("selectedLanguage", selectedLanguage)
  const [pickedLanguage, setPickedLanguage] = useState("")
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleLanguage = useCallback((e: React.MouseEvent<HTMLElement>, languageCode: string) => {
    if (selectedLanguage) {
      setAnchorEl(e.currentTarget);
      setPickedLanguage(languageCode);
      return;
    }
    selectLanguage(languageCode);
  }, [selectedLanguage]);

  const selectLanguage = useCallback(async (languageCode: string) => {
    localStorage.setItem(DataBasePoints.LANGUAGE, languageCode);
    dispatch(setLanguage(languageCode));
    await updateLanguage(languageCode);
     dispatch(setLanguageRecorderInDB())
    dispatch(toggleVisibilityMenuItem(""));
  }, []);

  return (
    <List>
      {languages.map((language) => {
        const keyName = Object.keys(language)[0];
        const languageCode = language[keyName];
        return (
          <div key={languageCode}>
            <ListItemButton dense onClick={(e) => handleLanguage(e, languageCode)}
            >
              <ListItemText
                primary={keyName}
              />
              {selectedLanguage && selectedLanguage == languageCode ? (
                <CheckIcon />
              ) : null}
            </ListItemButton>
          </div>
        );
      })}
      <UpdateLanguagePopover anchorEl={anchorEl} setAnchorEl={setAnchorEl} selectLanguage={selectLanguage} pickedLanguage={pickedLanguage} />
    </List>
  );

};

export default ChooseLanguage;
