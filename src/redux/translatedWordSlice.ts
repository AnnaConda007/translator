import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
const initialState = {
  translatedWord: "",
  translationWord: "",
};

export const wordsSlice = createSlice({
  name: "words",
  initialState,
  reducers: {
    setTranslatedWord: (state, action: PayloadAction<string>) => {
      state.translatedWord = action.payload;
    },
    setTranslationWord: (state, action: PayloadAction<string>) => {
      state.translationWord = action.payload;
    },
  },
});

export const { setTranslatedWord, setTranslationWord } = wordsSlice.actions;
export default wordsSlice.reducer;
