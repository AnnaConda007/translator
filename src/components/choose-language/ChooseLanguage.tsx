import CheckIcon from "@mui/icons-material/Check";
import { List, ListItemButton, ListItemText } from "@mui/material";
import { setLanguage } from "../../redux/languageSlice";
import { useDispatch } from "react-redux";
import { updateLanguagetoBdAndLS } from "../../utils/updateLanguagetoBdAndLS";
import { useSelector } from "react-redux";
import { RootStoreState } from "../../redux/store";
import { toggleVisibilityMenuItem } from '../../redux/visibilitySlice ';
const ChooseLanguage: React.FC = () => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector(
    (state: RootStoreState) => state.language
  );
  const languages: Array<{ [key: string]: string }> = [
    { английский: "en" },
    { грузинский: "ka" },
    { испанский: "es" },
    { итальянский: "it" },
    { немецкий: "de" },
    { французский: "fr" },
    { украинский: "uk" },
    { турецкий: "tr" },
    { корейский: "ko" },
  ];

  const handleListItemText = (languageCode: string) => {
     dispatch(setLanguage(languageCode));
    updateLanguagetoBdAndLS(languageCode);
    dispatch(toggleVisibilityMenuItem(""))
    
  };

  return (
    <List>
      {languages.map((language) => {
        const keyName = Object.keys(language)[0];
        const languageCode = language[keyName];
        return (
          <ListItemButton key={languageCode} dense>
            <ListItemText
              primary={keyName}
              onClick={() => handleListItemText(languageCode)}
            />
            {selectedLanguage && selectedLanguage == languageCode ? (
              <CheckIcon />
            ) : null}
          </ListItemButton>
        );
      })}
    </List>
  );
};

export default ChooseLanguage;
