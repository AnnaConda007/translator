import { useSelector, useDispatch } from "react-redux";
import { RootStoreState } from "../../redux/store";
import { IEntry } from "../../redux/dictionarySlice";
import { List, ListItem, ListItemText } from "@mui/material";
import { removeWord } from "../../redux/dictionarySlice";
import { addNewWordInBD } from "../../utils/updateDictionaryToBD";
import { TypeAction } from "../enum";
import TranslationInput from "../translation-input/TranslationInput";
import { AppDispatch } from "../../redux/store";

const Dictionary: React.FC = () => {
  const dictionary: Array<IEntry> = useSelector(
    (state: RootStoreState) => state.dictionary.words
  );
  const dispatch: AppDispatch = useDispatch();

  const handleDelete = (index: number, word: string, translation: string) => {
    dispatch(removeWord(index));
    addNewWordInBD({
      russianWord: word,
      translatedWord: translation,
      actionType: TypeAction.REMOVE,
    });
  };

  return (
    <>
      <TranslationInput />
      <List>
        {dictionary.map((entry, index) => {
          return (
            <ListItem key={entry.translatedWord} dense>
              <ListItemText
                primary={`${entry.translatedWord} : ${entry.russianWord}`}
              />
              <button
                onClick={() =>
                  handleDelete(
                    index,
                    `${entry.russianWord}`,
                    `${entry.translatedWord}`
                  )
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
