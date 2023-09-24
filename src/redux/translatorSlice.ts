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
  },
});

export const { setRussianWord, setForeignWord } = wordsSlice.actions;
export default wordsSlice.reducer;
