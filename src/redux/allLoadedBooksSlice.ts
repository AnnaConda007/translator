import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface IBooks {
  [key: string]: string;
}
const initialState: IBooks = {};

const allLoadedBooksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBooks: (state, action: PayloadAction<IBooks>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { setBooks } = allLoadedBooksSlice.actions;
export default allLoadedBooksSlice.reducer;
