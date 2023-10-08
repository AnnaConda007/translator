import { useState, useEffect } from "react";
import LibraryAddRoundedIcon from "@mui/icons-material/LibraryAddRounded";
import Button from "@mui/material/Button/Button";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { batch } from "react-redux";
import { TypeActionWordDictionary } from "../../enums/dictionaryEnum";
import { addWord } from "../../redux/dictionarySlice";
import { IEntry } from "../../redux/dictionarySlice";
import { RootStoreState } from "../../redux/store";
import { AppDispatch } from "../../redux/store";
import {
  toggleTranslationInputVisibility,
  toggleVisibilityTranlsation,
} from "../../redux/visibilitySlice ";
import { add_DeliteWordInBD } from "../../utils/updateData/add_DeliteWordInDictionary";

const ButtonAddToDictionary: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [disabledSwitch, setDisabledSwitch] = useState<boolean>(true);
  const dictionary: Array<IEntry> = useSelector(
    (state: RootStoreState) => state.dictionary.words,
  );
  const translationWord: string = useSelector(
    (state: RootStoreState) => state.translator.foreignWord,
  );
  const translatedWord: string = useSelector(
    (state: RootStoreState) => state.translator.russianWord,
  );

  useEffect(() => {
    const checkExistenceInDictionary: IEntry | undefined = dictionary.find(
      (entry: IEntry) => entry.foreignWord === translationWord,
    );
    setDisabledSwitch(Boolean(checkExistenceInDictionary));
  }, [dictionary, translationWord]);

  const handleButtonAddInDictionary = async () => {
    setDisabledSwitch(true);
    const fetchResponse = await add_DeliteWordInBD({
      russianWord: translatedWord,
      foreignWord: translationWord,
      actionType: TypeActionWordDictionary.ADD,
    });
    if (fetchResponse?.ok !== true) return;
    batch(() => {
      dispatch(
        addWord({
          russianWord: translatedWord,
          foreignWord: translationWord,
        }),
      );
      dispatch(toggleVisibilityTranlsation(false));
      dispatch(toggleTranslationInputVisibility(false));
    });
  };

  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<LibraryAddRoundedIcon />}
      onClick={handleButtonAddInDictionary}
      disabled={disabledSwitch}
    />
  );
};

export default ButtonAddToDictionary;
