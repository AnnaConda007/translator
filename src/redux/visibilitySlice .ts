import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  menuItem: "",
  translationInput: false,
  addNewBookInput: true
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
    },
  },
});

export const { toggleVisibilityMenuItem, toggleTranslationInputVisibility, toggleAddNewBookInput } =
  visibilitySlice.actions;
export default visibilitySlice.reducer;


