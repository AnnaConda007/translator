import { useSelector, useDispatch } from "react-redux";
import { RootStoreState } from "../../redux/store";
import { IEntry } from "../../redux/dictionarySlice";
import { List, ListItem, ListItemText } from "@mui/material";
import { removeWord } from "../../redux/dictionarySlice";
import { add_deliteWordInBD } from "../../utils/updateDictionaryToBD";
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
    add_deliteWordInBD({
      russianWord: word,
      foreignWord: translation,
      actionType: TypeAction.REMOVE,
    });
  };

  return (
    <>
      <TranslationInput />
      <List>
        {dictionary.map((entry, index) => {
          return (
            <ListItem key={entry.foreignWord} dense>
              <ListItemText
                primary={`${entry.foreignWord} : ${entry.russianWord}`}
              />
              <button
                onClick={() =>
                  handleDelete(
                    index,
                    `${entry.russianWord}`,
                    `${entry.foreignWord}`
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
