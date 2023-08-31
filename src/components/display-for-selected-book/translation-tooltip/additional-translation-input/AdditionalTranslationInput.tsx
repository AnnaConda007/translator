import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { translate } from "../../../../utils/tranlslateAPI";
const AdditionalTranslationInput: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [translatedWord, setTranslatedWord] = useState<string>("");

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleButtonTranslation = async (value: string) => {
    const translateResult: string | null = await translate(value);
    if (!translateResult) return;
    setTranslatedWord(translateResult);
  };

  const handleButtonAddInDictionary = ()=>{
    const dictionary = {}
    
  }

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
        <Button variant="outlined" onClick={() => handleButtonTranslation(value)}>
          перевести{" "}
        </Button>
      </div>
      <div>
        {translatedWord}
        <Button variant="outlined">добавить в словарь</Button>
      </div>
    </div>
  );
};

export default AdditionalTranslationInput;
