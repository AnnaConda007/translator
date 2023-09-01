import CheckIcon from "@mui/icons-material/Check";
import { List, ListItem, ListItemText } from "@mui/material";
import { setLanguage } from "../../redux/languageSlice";
import { useDispatch } from "react-redux";
import { updateLanguagetoBdAndLS } from "../../utils/updateLanguagetoBdAndLS";
import { useSelector } from "react-redux";
import { RootStoreState } from "../../redux/store";
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
    console.log(languageCode);
    dispatch(setLanguage(languageCode));
    updateLanguagetoBdAndLS(languageCode);
  };

  return (
    <List>
      {languages.map((language) => {
        const keyName = Object.keys(language)[0];
        const languageCode = language[keyName];
        return (
          <ListItem key={languageCode} dense>
            <ListItemText
              primary={keyName}
              onClick={() => handleListItemText(languageCode)}
            />
            {selectedLanguage && selectedLanguage == languageCode ? (
              <CheckIcon />
            ) : null}
          </ListItem>
        );
      })}
    </List>
  );
};

export default ChooseLanguage;
