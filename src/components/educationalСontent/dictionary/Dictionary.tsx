import { useState } from "react";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import CloseIcon from "@mui/icons-material/Close";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { IconButton ,Box} from "@mui/material";
import { useSelector, useDispatch, batch } from "react-redux";
import { UserData } from "../../../enums/authEnum";
import { TypeActionWordDictionary } from "../../../enums/dictionaryEnum";
import { IEntry, removeWord } from "../../../redux/dictionarySlice";
import { RootStoreState, AppDispatch } from "../../../redux/store";
import { toggleVisibilityTranlsation } from "../../../redux/visibilitySlice ";
import { add_DeliteWordInBD } from "../../../utils/updateData/add_DeliteWordInDictionary";
import AuthPopove from "../../authPopover/AuthPopover";
import TranslationInput from "../../translation-input/TranslationInput"; 
import {   ListItemStyled, ListItemTextStyled, ListStyled} from "../Styled";
import ContentConteiner from '../content-conteiner/ContentConteiner';
import theme from '../../../muiThem';
const Dictionary: React.FC = () => {
  const userIsRegistered = localStorage.getItem(UserData.USER_ID);
  const [OpenAuthPopover, setOpenAuthPopover] = useState<HTMLElement | null>(
    null,
  );
  const dictionary: Array<IEntry> = useSelector(
    (state: RootStoreState) => state.dictionary.words,
  );
  const dispatch: AppDispatch = useDispatch();
  const clickedAddButton = useSelector(
    (state: RootStoreState) => state.visibility.translate,
  );

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
      return;
    }
    dispatch(toggleVisibilityTranlsation(!clickedAddButton));
  };

  return ( 
      <ContentConteiner>
        <Box sx={{width:"100%"}}>
        <IconButton
          color="primary"
          onClick={(e) => toggleInputVisibility(e.currentTarget)}
        >
          {clickedAddButton ? <CloseIcon /> : <AddToPhotosIcon />}{" "}
        </IconButton>
        {clickedAddButton && <TranslationInput />}
        <AuthPopove
          anchorEl={OpenAuthPopover}
          setAnchorEl={setOpenAuthPopover}
          popoverValue={"что бы добавить свои cлова в словарь"}
        />
        <ListStyled  >
          {dictionary.map((entry) => {
            return (
              <ListItemStyled key={entry.foreignWord} dense>
                <ListItemTextStyled
                  primary={`${entry.foreignWord} : ${entry.russianWord}`}
                />
                <IconButton
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(
                      `${entry.russianWord}`,
                      `${entry.foreignWord}`,
                    );
                  }}
                >
                  <DeleteForeverIcon />
                </IconButton>
              </ListItemStyled>
            );
          })}
        </ListStyled>
        </Box>
      </ContentConteiner> 
  );
};

export default Dictionary;
