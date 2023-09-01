import BooksLibrary from "../books-library/BooksLibrary";
import { setMenuItem } from "../../redux/menuItemSlice";
import { List, ListItemText, ListItemButton } from "@mui/material";
import Dictionary from "../dictionary/Dictionary";
import ChooseLanguage from "../choose-language/ChooseLanguage";
import { useDispatch, useSelector } from "react-redux";
import { RootStoreState } from "../../redux/store";
interface INavElements {
  [key: string]: React.ReactElement;
}

const Nav: React.FC = () => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector(
    (state: RootStoreState) => state.language
  );
  const selectedMenuItem = useSelector(
    (state: RootStoreState) => state.menuItem
  );
  const nawElemets: Array<INavElements> = [
    { библиотека: <BooksLibrary /> },
    { словарь: <Dictionary /> },
    { тестирование: <BooksLibrary /> },
    { "выбрать язык": <ChooseLanguage /> },
  ];

  const handleNavElem = (elem: string) => {
    if (elem === selectedMenuItem) {
      dispatch(setMenuItem(""));
      return;
    }
    dispatch(setMenuItem(elem));
  };

  return (
    <nav>
      <List>
        {nawElemets.map((elem, index) => {
          const keyName = Object.keys(elem)[0];
          return (
            <ListItemButton
              key={index}
              dense
              disabled={
                !selectedLanguage && keyName !== "выбрать язык" ? true : false
              }
            >
              <ListItemText
                primary={keyName}
                onClick={() => handleNavElem(keyName)}
              />
              {selectedMenuItem && selectedMenuItem === keyName
                ? elem[keyName]
                : null}
            </ListItemButton>
          );
        })}
      </List>
    </nav>
  );
};

export default Nav;
