import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { DataBasePoints } from '../enums/dataBasePointsEnum';

const initialState = localStorage.getItem(DataBasePoints.LANGUAGE) || "";

const selectedLanguageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      return action.payload;
    },
    resetLanguage: (state) => {
      return ""
    },
  },
});

export const { setLanguage, resetLanguage } = selectedLanguageSlice.actions;
export default selectedLanguageSlice.reducer;
