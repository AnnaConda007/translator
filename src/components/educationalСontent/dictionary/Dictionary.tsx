import { useSelector, useDispatch, batch } from "react-redux";
import { RootStoreState, AppDispatch } from "../../../redux/store";
import { IEntry, removeWord } from "../../../redux/dictionarySlice";
import { IconButton } from "@mui/material";
import { add_DeliteWordInBD } from '../../../utils/updateData/add_DeliteWordInDictionary';
import { TypeActionWordDictionary } from '../../../enums/dictionaryEnum';
import TranslationInput from "../../translation-input/TranslationInput";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useState } from "react";
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import CloseIcon from '@mui/icons-material/Close';
import AuthPopove from '../../authPopover/AuthPopover';
import { UserData } from '../../../enums/authEnum';
import { StyledContentBox, ListItemStyled, ListItemTextStyled, ListStyled } from '../Styled';
import Backing from '../Backing';

const Dictionary: React.FC = () => {
  const userIsRegistered = localStorage.getItem(UserData.USER_ID)
  const [OpenAuthPopover, setOpenAuthPopover] = useState<HTMLElement | null>(null);
  const dictionary: Array<IEntry> = useSelector(
    (state: RootStoreState) => state.dictionary.words
  );
  const dispatch: AppDispatch = useDispatch();
  const [clickedAddButton, setClickedAddButton] = useState<boolean>(false)

  const handleDelete = (word: string, translation: string) => {
    batch(() => {
      dispatch(removeWord(translation));
      add_DeliteWordInBD({
        russianWord: word,
        foreignWord: translation,
        actionType: TypeActionWordDictionary.REMOVE,
      });
    });
  };

  const toggleInputVisibility = (currentTarget: HTMLElement | null) => {
    if (!userIsRegistered) {
      setOpenAuthPopover(currentTarget);
      return
    }
    setClickedAddButton(!clickedAddButton)
  }

  return (
    <Backing>
      <StyledContentBox >
        <IconButton color="primary" onClick={(e) => toggleInputVisibility(e.currentTarget)}>{clickedAddButton ? <CloseIcon /> : <AddToPhotosIcon />} </IconButton >
        {clickedAddButton && <TranslationInput />}
        <AuthPopove anchorEl={OpenAuthPopover} setAnchorEl={setOpenAuthPopover} popoverValue={"что бы добавить свои cлова в словарь"} />
        <ListStyled >
          {dictionary.map((entry) => {
            return (
              <ListItemStyled key={entry.foreignWord} dense>
                <ListItemTextStyled
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
              </ListItemStyled>
            );
          })}
        </ListStyled>
      </StyledContentBox>
    </Backing>

  );
};

export default Dictionary;
