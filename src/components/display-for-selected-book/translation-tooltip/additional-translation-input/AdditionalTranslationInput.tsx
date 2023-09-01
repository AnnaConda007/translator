import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { translate } from "../../../../utils/tranlslateAPI";
import ButtonAddToAddDtionary from "../../button-add-to-dictionary/ButtonAddTodiDtionary";
import { useDispatch } from "react-redux";
import {
  setTranslationWord,
  setTranslatedWord,
} from "../../../../redux/translatedWordSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootStoreState } from "../../../../redux/store";
const AdditionalTranslationInput: React.FC = () => {
  const dispatch = useDispatch();
  const [inputValue, setinputValue] = useState<string>("");
  const [translatedWors, setTranslatedWors] = useState<string>("");
  const selectedLanguage = useSelector(
    (state: RootStoreState) => state.language
  );

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setinputValue(e.target.value);
  };
  const handleTranslate = async (value: string) => {
    if (!value || !selectedLanguage) return;
     const translateResult: string | null = await translate(
      selectedLanguage,
       value);

    if (!translateResult) return;
    setTranslatedWors(translateResult);
    dispatch(setTranslationWord(inputValue));
    dispatch(setTranslatedWord(translateResult));
  };

  return (
    <div>
      <div>
        <TextField
          type="search"
          autoComplete="off"
          label="перевести"
          variant="outlined"
          fullWidth
          value={inputValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            changeValue(e);
          }}
        />
        <Button variant="outlined" onClick={() => handleTranslate(inputValue)}>
          перевести
        </Button>
      </div>
      <div>
        {translatedWors}
        {translatedWors ? <ButtonAddToAddDtionary /> : null}
      </div>
    </div>
  );
};

export default AdditionalTranslationInput;
