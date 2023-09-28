import BooksLibrary from "../books-library/BooksLibrary";
import { toggleVisibilityMenuItem } from "../../redux/visibilitySlice ";
import { List, ListItemText, ListItemButton } from "@mui/material";
import Dictionary from "../dictionary/Dictionary";
import ChooseLanguage from "../choose-language/ChooseLanguage";
import { useDispatch, useSelector } from "react-redux";
import { RootStoreState } from "../../redux/store";
import FlashCards from '../flashCards/FlashCards';
import { AppDispatch } from '../../redux/store';
import { DataBasePoints } from '../../enums/dataBasePointsEnum';
interface INavElements {

  [key: string]: React.ReactElement;
}

const Nav: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const localSelectedLanguage = localStorage.getItem(`${DataBasePoints.LANGUAGE}`)
  const selectedLanguage = useSelector(
    (state: RootStoreState) => state.language
  );
  const language = localSelectedLanguage || selectedLanguage
  const selectedMenuItem = useSelector(
    (state: RootStoreState) => state.visibility.menuItem
  );


  const nawElemets: Array<INavElements> = [
    { библиотека: <BooksLibrary /> },
    { словарь: <Dictionary /> },
    { тестирование: <FlashCards /> },
    { "выбрать язык": <ChooseLanguage /> },
  ];

  const handleNavElem = (elem: string) => {
    if (elem === selectedMenuItem) {
      dispatch(toggleVisibilityMenuItem(""));
      return;
    }
    dispatch(toggleVisibilityMenuItem(elem));
  };

  return (
    <nav>
      <List>
        {nawElemets.map((elem, index) => {
          const keyName = Object.keys(elem)[0];
          return (
            <ListItemButton
              onClick={() => handleNavElem(keyName)}
              key={index}
              dense
              disabled={
                !language && keyName !== "выбрать язык" ? true : false
              }
            >
              <ListItemText
                primary={keyName}
                onClick={() => handleNavElem(keyName)}
              />
              {selectedMenuItem && selectedMenuItem === keyName ? (
                <div onClick={(e) => e.stopPropagation()}>{elem[keyName]}</div>
              ) : null}
            </ListItemButton>
          );
        })}
      </List>
    </nav>
  );
};

export default Nav;
