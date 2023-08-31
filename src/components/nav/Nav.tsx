import BooksLibrary from "../books-library/BooksLibrary";
import { useState } from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import Dictionary from "../dictionary/Dictionary";
interface INavElements {
  [key: string]: React.ReactElement;
}

const Nav: React.FC = () => {
  const nawElemets: Array<INavElements> = [
    { библиотека: <BooksLibrary /> },
    { словарь: <Dictionary /> },
    { тестирование: <BooksLibrary /> },
  ];
  const [selectedKey, setSelectedKey] = useState<string>("");

  const handleNavElem = (elem: string) => {
    if (elem === selectedKey) {
      setSelectedKey("");
      return;
    }
    setSelectedKey(elem);
  };

  return (
    <nav>
      <List>
        {nawElemets.map((elem, index) => {
          const keyName = Object.keys(elem)[0];
          return (
            <ListItem key={index} dense>
              <ListItemText
                primary={keyName}
                onClick={() => handleNavElem(keyName)}
              />
              {selectedKey && selectedKey === keyName ? elem[keyName] : null}
            </ListItem>
          );
        })}
      </List>
    </nav>
  );
};

export default Nav;
