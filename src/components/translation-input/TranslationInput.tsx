import { TextField, Box } from "@mui/material";
import { useState } from "react";
import TranslateActionButton from "./translate-action-button/TranslateActionButton";
import TranslationResultDisplay from './translation-result-display/TranslationResultDisplay ';
import { useCallback } from 'react';
import { useHandleTranslate } from '../../hooks/autentiification/useHandleTranslate';
import theme from '../../muiThem';



const TranslationInput: React.FC = () => {
  const translateInputValue = useHandleTranslate()
  const [inputValue, setInputValue] = useState<string>("");

  const handleChangeValue = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^[a-zA-Zа-яА-Я]/.test(value) || value === "") {
      setInputValue(value);
    }
  }, []);

  const translate = async (inputValue: string) => {
    await translateInputValue(inputValue);
    setInputValue("")
  }

  return (
    <Box sx={{ position: "absolute", zIndex: "2", backgroundColor: theme.palette.secondary.main }}>
      <TextField
        type="text"
        autoComplete="off"
        label="введите слово для перевода"
        variant="outlined"
        fullWidth
        value={inputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          handleChangeValue(e);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            translate(inputValue);
          }
        }}
        InputProps={{
          endAdornment: (
            <TranslateActionButton value={inputValue} setInputValue={setInputValue} />
          )
        }}
      />
      <TranslationResultDisplay />
    </Box>
  );
};

export default TranslationInput;





