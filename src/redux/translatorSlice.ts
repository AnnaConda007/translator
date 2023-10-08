import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
const initialState = {
  russianWord: "",
  foreignWord: "",
};

export const wordsSlice = createSlice({
  name: "words",
  initialState,
  reducers: {
    setRussianWord: (state, action: PayloadAction<string>) => {
      state.russianWord = action.payload;
    },
    setForeignWord: (state, action: PayloadAction<string>) => {
      state.foreignWord = action.payload;
    },
    resetTranslator: (state) => {
      state.russianWord = "";
      state.foreignWord = "";
    },
  },
});

export const { setRussianWord, setForeignWord, resetTranslator } =
  wordsSlice.actions;
export default wordsSlice.reducer;
