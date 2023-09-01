import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState = "";

const menuItemSlice = createSlice({
  name: "menuItem",
  initialState,
  reducers: {
    setMenuItem: (state, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const { setMenuItem } = menuItemSlice.actions;
export default menuItemSlice.reducer;
