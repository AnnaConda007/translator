import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type BookTitleList = string[];

const initialState: BookTitleList = [];
const listOfBookTitlesSlice = createSlice({
  name: "titleList",
  initialState,
  reducers: {
    setTitleList: (
      state,
      action: PayloadAction<BookTitleList>
    ): BookTitleList => {
      return action.payload;
    },
  },
});

export const { setTitleList } = listOfBookTitlesSlice.actions;
export default listOfBookTitlesSlice.reducer;
