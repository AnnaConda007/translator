import { List, ListItemButton, ListItemText } from "@mui/material";
import { languages } from '../../../../contains';
import { useDispatch, useSelector } from 'react-redux';
import { RootStoreState } from '../../../../redux/store';
import { useCallback } from 'react';
import { setLanguageCode } from '../../../../redux/languageUpdateSlice';

interface LanguageListProps {
  setAnchorEl: (value: HTMLElement | null) => void
}

const LanguageList: React.FC<LanguageListProps> = ({ setAnchorEl }) => {
  const dispatch = useDispatch();

  const selectedLanguage = useSelector((state: RootStoreState) => state.language)

  const handleLanguage = useCallback((e: React.MouseEvent<HTMLElement>, languageCode: string) => {
    setAnchorEl(e.currentTarget);
    dispatch(setLanguageCode(languageCode))

    return;
  }, [selectedLanguage]);

  return (<List>
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
  </List>)
}
export default LanguageList