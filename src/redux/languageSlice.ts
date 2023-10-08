import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { DataBasePoints } from "../enums/dataBasePointsEnum";

const initialState = localStorage.getItem(DataBasePoints.LANGUAGE) || "en";

const selectedLanguageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (_, action: PayloadAction<string>) => {
      return action.payload;
    },
    resetLanguage: () => {
      return "";
    },
  },
});

export const { setLanguage, resetLanguage } = selectedLanguageSlice.actions;
export default selectedLanguageSlice.reducer;
