import { useSelector, useDispatch } from "react-redux";
import { RootStoreState } from "../../redux/store";
import { IDictionary } from "../../redux/dictionarySlice";
import { List, ListItem, ListItemText } from "@mui/material";
import { removeWord } from "../../redux/dictionarySlice";
import { updateDictionaryToBD } from "../../utils/updateDictionaryToBD";
import { TypeAction } from "../enum";
import { getDictionaryFromBD } from "../../utils/getDictionaryFromBD";
import { setDictionary } from "../../redux/dictionarySlice";
import { useEffect } from "react";
import TranslationInput from "../translation-input/TranslationInput";
const Dictionary: React.FC = () => {
  const dispatch = useDispatch();
  const dictionary: IDictionary = useSelector(
    (state: RootStoreState) => state.dictionary
  );

  useEffect(() => {
    getDictionaryFromBD(dispatch, setDictionary);
    localStorage.setItem("dictionary", JSON.stringify(dictionary));
  }, [dispatch, dictionary]);

  const handleDelete = (index: number, word: string, translation: string) => {
    dispatch(removeWord(index));
    updateDictionaryToBD({ [word]: translation }, TypeAction.REMOVE);
  };
  return (
    <>
      <TranslationInput />
      <List>
        {dictionary.map((entry, index) => {
          const keyName = Object.keys(entry)[0];
          return (
            <ListItem key={entry[keyName]} dense>
              <ListItemText primary={`${keyName} : ${entry[keyName]}`} />
              <button
                onClick={() =>
                  handleDelete(index, `${keyName}`, `${entry[keyName]}`)
                }
              >
                delete
              </button>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default Dictionary;
