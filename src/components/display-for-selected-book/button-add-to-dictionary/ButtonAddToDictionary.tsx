import { addDeliteWordInBD } from '../../../utils/updateDB/addDeliteWordInDictionary';
import { TypeActionWordDictionary } from "../../../enums/enum";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button/Button";
import LibraryAddRoundedIcon from "@mui/icons-material/LibraryAddRounded";
import { RootStoreState } from "../../../redux/store";
import { addWord } from "../../../redux/dictionarySlice";
import { toggleTranslationInputVisibility } from "../../../redux/visibilitySlice ";
import { IEntry } from "../../../redux/dictionarySlice";
import { AppDispatch } from "../../../redux/store";
import { useState, useEffect } from "react";

const ButtonAddToDictionary: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [disabledSwitch, setDisabledSwitch] = useState<boolean>(true);
  const dictionary: Array<IEntry> = useSelector(
    (state: RootStoreState) => state.dictionary.words
  );
  const translationWord: string = useSelector(
    (state: RootStoreState) => state.translator.foreignWord
  );
  const translatedWord: string = useSelector(
    (state: RootStoreState) => state.translator.russianWord
  );

  useEffect(() => {
    const checkExistenceInDictionary: IEntry | undefined = dictionary.find(
      (entry: IEntry) => entry.foreignWord == translationWord
    );
    setDisabledSwitch(Boolean(checkExistenceInDictionary));
  }, [dictionary, translationWord]);

  const handleButtonAddInDictionary = async () => {
    setDisabledSwitch(true);
    const fetchResponse = await addDeliteWordInBD({
      russianWord: translatedWord,
      foreignWord: translationWord,
      actionType: TypeActionWordDictionary.ADD,
    });
    if (fetchResponse?.ok !== true) return;
    dispatch(
      addWord({
        russianWord: translatedWord,
        foreignWord: translationWord,
      })
    );
    dispatch(toggleTranslationInputVisibility(false));
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
