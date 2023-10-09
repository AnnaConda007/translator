import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  menuItem: "",
  menuOpen: true,
  translationInput: false,
  translate: false,
  addNewBookInput: false,
  authCodeInput: false,
  authForm: "",
};
const visibilitySlice = createSlice({
  name: "visibility",
  initialState,
  reducers: {
    toggleVisibilityMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.menuOpen = action.payload;
    },
    toggleVisibilityMenuItem: (state, action: PayloadAction<string>) => {
      state.menuItem = action.payload;
    },
    toggleVisibilityAuthForm: (state, action: PayloadAction<string>) => {
      state.authForm = action.payload;
    },
    toggleVisibilityTranlsation: (state, action: PayloadAction<boolean>) => {
      state.translate = action.payload;
    },
    toggleTranslationInputVisibility: (
      state,
      action: PayloadAction<boolean>,
    ) => {
      state.translationInput = action.payload;
    },
    toggleAddNewBookInput: (state, action: PayloadAction<boolean>) => {
      state.addNewBookInput = action.payload;
    },
    toggleAuthCodeInput: (state, action: PayloadAction<boolean>) => {
      state.authCodeInput = action.payload;
    },
    resetVisibility: (state) => {
      state.menuItem = "";
      state.translationInput = false;
      state.addNewBookInput = false;
      state.authCodeInput = false;
      state.menuOpen = true;
    },
  },
});

export const {
  toggleVisibilityMenuItem,
  toggleTranslationInputVisibility,
  toggleAddNewBookInput,
  toggleAuthCodeInput,
  resetVisibility,
  toggleVisibilityTranlsation,
  toggleVisibilityMenuOpen,
  toggleVisibilityAuthForm,
} = visibilitySlice.actions;
export default visibilitySlice.reducer;
