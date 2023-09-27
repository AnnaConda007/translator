import { useSelector, useDispatch, batch } from "react-redux";
import { RootStoreState } from "../../redux/store";
import { IEntry } from "../../redux/dictionarySlice";
import { List, ListItem, ListItemText } from "@mui/material";
import { removeWord } from "../../redux/dictionarySlice";
import { addDeliteWordInBD } from '../../utils/updateDB/addDeliteWordInDictionary';
import { TypeActionWordDictionary } from "../../enums/enum";
import TranslationInput from "../translation-input/TranslationInput";
import { AppDispatch } from "../../redux/store";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
const Dictionary: React.FC = () => {
  batch;
  const dictionary: Array<IEntry> = useSelector(
    (state: RootStoreState) => state.dictionary.words
  );
  const dispatch: AppDispatch = useDispatch();

  const handleDelete = (word: string, translation: string) => {
    batch(() => {
      dispatch(removeWord(translation));
      addDeliteWordInBD({
        russianWord: word,
        foreignWord: translation,
        actionType: TypeActionWordDictionary.REMOVE,
      });
    });
  };

  return (
    <>
      <TranslationInput />
      <List>
        {dictionary.map((entry) => {
          return (
            <ListItem key={entry.foreignWord} dense>
              <ListItemText
                primary={`${entry.foreignWord} : ${entry.russianWord}`}
              />
              <button
                onClick={() =>
                  handleDelete(`${entry.russianWord}`, `${entry.foreignWord}`)
                }
              >
                <DeleteForeverIcon />
              </button>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default Dictionary;
