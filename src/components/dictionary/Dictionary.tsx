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
  }, [dispatch]);

  const handleDelete = (index: number, word: string, translation: string) => {
    dispatch(removeWord(index));
    updateDictionaryToBD({
      russianWord: word,
      translatedWord: translation,
      actionType: TypeAction.REMOVE,
    });
  };


  console.log(dictionary)
  return (
    <>
      <TranslationInput />
      <List>
        {dictionary.map((entry, index) => {
          return (
            <ListItem key={entry.translatedWord} dense>
              <ListItemText primary={`${entry.translatedWord} : ${entry.russianWord}`} />
              <button
                onClick={() =>
                  handleDelete(index, `${entry.russianWord}`, `${entry.translatedWord}`)
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
