import { updateDictionaryToBD } from "../../../utils/updateDictionaryToBD";
import { TypeAction } from "../../enum";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button/Button";
import LibraryAddRoundedIcon from "@mui/icons-material/LibraryAddRounded";
import { RootStoreState } from "../../../redux/store";
import { addWord } from "../../../redux/dictionarySlice";
import { toggleTranslationInputVisibility } from "../../../redux/visibilitySlice ";

const ButtonAddToDictionary: React.FC = () => {
  const dispatch = useDispatch();
  const translationWord: string = useSelector(
    (state: RootStoreState) => state.translator.translationWord
  );
  const translatedWord: string = useSelector(
    (state: RootStoreState) => state.translator.translatedWord
  );

  const handleButtonAddInDictionary = async () => {
    await updateDictionaryToBD({
      russianWord: translatedWord,
      translatedWord: translationWord,
      actionType: TypeAction.ADD,
    });
    dispatch(
      addWord({ russianWord: translationWord, translatedWord, counter: 0 })
    );
    dispatch(toggleTranslationInputVisibility(false));
  };

  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<LibraryAddRoundedIcon />}
      onClick={handleButtonAddInDictionary}
    />
  );
};

export default ButtonAddToDictionary;
