import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  menuItem: "",
  translationInput: false,
  addNewBookInput: false,
  authCodeInput: false
};
const visibilitySlice = createSlice({
  name: "visibility",
  initialState,
  reducers: {
    toggleVisibilityMenuItem: (state, action: PayloadAction<string>) => {
      state.menuItem = action.payload;
    },
    toggleTranslationInputVisibility: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.translationInput = action.payload;
    }, toggleAddNewBookInput: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.addNewBookInput = action.payload;
    }, toggleAuthCodeInput: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.authCodeInput = action.payload;
    },
    resetVisibility: (state) => {
      state.menuItem = ""
      state.translationInput = false
      state.addNewBookInput = false
      state.authCodeInput = false
    }

  },
});

export const { toggleVisibilityMenuItem, toggleTranslationInputVisibility, toggleAddNewBookInput, toggleAuthCodeInput, resetVisibility } =
  visibilitySlice.actions;
export default visibilitySlice.reducer;


