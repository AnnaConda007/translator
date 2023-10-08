import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  pickedLang: "",
  activeLanguageBox: false,
  languageCode: "",
};

const languageUpdateSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setPickedLang: (state, action: PayloadAction<string>) => {
      state.pickedLang = action.payload;
    },
    setActiveLanguageBox: (state, action: PayloadAction<boolean>) => {
      state.activeLanguageBox = action.payload;
    },
    setLanguageCode: (state, action: PayloadAction<string>) => {
      state.languageCode = action.payload;
    },
  },
});

export const { setPickedLang, setActiveLanguageBox, setLanguageCode } =
  languageUpdateSlice.actions;
export default languageUpdateSlice.reducer;
