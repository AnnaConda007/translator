import React, { useCallback } from "react";
import CheckIcon from "@mui/icons-material/Check";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { languages } from "../../../contains";
import { DataBasePoints } from "../../../enums/dataBasePointsEnum";
import { setLanguage } from "../../../redux/languageSlice";
import { RootStoreState } from "../../../redux/store";

const ChooseLanguage: React.FC = () => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector(
    (state: RootStoreState) => state.language,
  );

  const selectLanguage = useCallback(async (languageCode: string) => {
    localStorage.setItem(DataBasePoints.LANGUAGE, languageCode);
    dispatch(setLanguage(languageCode));
  }, []);

  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel id="language-selector-label">
        Выберите язык для изучения
      </InputLabel>
      <Select
        labelId="language-selector-label"
        id="language-selector"
        value={selectedLanguage || ""}
        onChange={(e) => selectLanguage(e.target.value)}
        label="Select Language"
      >
        {languages.map((language) => {
          const keyName = Object.keys(language)[0];
          const languageCode = language[keyName];
          return (
            <MenuItem key={languageCode} value={languageCode}>
              {keyName} {selectedLanguage === languageCode && <CheckIcon />}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default ChooseLanguage;
