import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { translate } from "../../../../utils/tranlslateAPI";
import { useDispatch } from "react-redux";
import { addWord } from "../../../../redux/dictionarySlice";

const AdditionalTranslationInput: React.FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>("");
  const [translatedWord, setTranslatedWord] = useState<string>("");

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleTranslate = async (value: string) => {
    const translateResult: string | null = await translate(value);
    if (!translateResult) return;
    setTranslatedWord(translateResult);
  };

  const handleAddWord = () => {
    dispatch(addWord({ [value]: translatedWord }));
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
        {translatedWord}
        {translatedWord ? (
          <Button variant="outlined" onClick={handleAddWord}>добавить в словарь</Button>
        ) : null}
      </div>
    </div>
  );
};

export default AdditionalTranslationInput;
