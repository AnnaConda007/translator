import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  menuItem: "",
  translationInput: false,
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
    },
  },
});

export const { toggleVisibilityMenuItem, toggleTranslationInputVisibility } =
  visibilitySlice.actions;
export default visibilitySlice.reducer;
