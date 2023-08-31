import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { translate } from "../../../../utils/tranlslateAPI";
import ButtonAddToAddDtionary from "../../button-add-to-dictionary/ButtonAddTodiDtionary";
import { useDispatch } from 'react-redux';
import { setTranslationWord , setTranslatedWord} from '../../../../redux/translatedWordSlice';
 const AdditionalTranslationInput: React.FC = () => {
   const dispatch = useDispatch()
  const [value, setValue] = useState<string>("");
  const [additionTranslatedWord, setAdditionTranslatedWord] = useState<string>(""); 
  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleTranslate = async (value: string) => {
    const translateResult: string | null = await translate(value);
    if (!translateResult) return;
    setAdditionTranslatedWord(translateResult);
    dispatch(setTranslationWord(value))
    dispatch(setTranslatedWord(translateResult))

  };

  return (
    <div>
      <div>
        <TextField
          type="search"
          label="перевести"
          variant="outlined"
          fullWidth
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            changeValue(e);
          }}
        />
        <Button variant="outlined" onClick={() => handleTranslate(value)}>
          перевести
        </Button>
      </div>
      <div>
        {additionTranslatedWord}
        {additionTranslatedWord ? <ButtonAddToAddDtionary /> : null}
      </div>
    </div>
  );
};

export default AdditionalTranslationInput;
