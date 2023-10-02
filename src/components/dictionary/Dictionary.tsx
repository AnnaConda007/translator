import { useSelector, useDispatch, batch } from "react-redux";
import { RootStoreState, AppDispatch } from "../../redux/store";
import { IEntry, removeWord } from "../../redux/dictionarySlice";
import { List, ListItem, ListItemText, IconButton } from "@mui/material";
import { addDeliteWordInBD } from '../../utils/updateDB/addDeliteWordInDictionary';
import { TypeActionWordDictionary } from '../../enums/dictionaryEnum';
import TranslationInput from "../translation-input/TranslationInput";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useState } from "react";
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import CloseIcon from '@mui/icons-material/Close';

const Dictionary: React.FC = () => {
  const dictionary: Array<IEntry> = useSelector(
    (state: RootStoreState) => state.dictionary.words
  );
  const dispatch: AppDispatch = useDispatch();
  const [clickedAddButton, setClickedAddButton] = useState<boolean>(false)
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
  const toggleInputVisibility = () => {
    setClickedAddButton(!clickedAddButton)
  }

  return (
    <>
      <IconButton color="primary" onClick={toggleInputVisibility}>{clickedAddButton ? <CloseIcon /> : <AddToPhotosIcon />} </IconButton >
      {clickedAddButton && <TranslationInput />}
      <List>
        {dictionary.map((entry) => {
          return (
            <ListItem key={entry.foreignWord} dense>
              <ListItemText
                primary={`${entry.foreignWord} : ${entry.russianWord}`}
              />
              <IconButton
                onClick={(e) => {
                  e.stopPropagation()
                  handleDelete(`${entry.russianWord}`, `${entry.foreignWord}`)
                }}
              >
                <DeleteForeverIcon />
              </IconButton>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default Dictionary;
