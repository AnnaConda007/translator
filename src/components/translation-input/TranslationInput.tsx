import { TextField } from "@mui/material";
import { useState } from "react";
import TranslationResultDisplay from "./translation-result-display/TranslationResultDisplay ";
import TranslateActionButton from "./translate-action-button/TranslateActionButton";

const TranslationInput: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^[a-zA-Zа-яА-Я]/.test(value) || value === "") {
      setInputValue(value);
    }
  };

  return (
    <div>
      <TextField
        type="search"
        autoComplete="off"
        label="перевести"
        variant="outlined"
        fullWidth
        value={inputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          handleChangeValue(e);
        }}
      />
      <TranslateActionButton value={inputValue} setInputValue={setInputValue} />
      <TranslationResultDisplay />
    </div>
  );
};

export default TranslationInput;
