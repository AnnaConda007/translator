import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("selectedLanguage") || null;

const selectedLanguageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const { setLanguage } = selectedLanguageSlice.actions;
export default selectedLanguageSlice.reducer;
