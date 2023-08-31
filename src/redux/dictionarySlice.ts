import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface IDictionary {
  [key: string]: string;
}
const initialState: IDictionary = {};

const dictionary = createSlice({
  name: "dictionary",
  initialState,
  reducers: {
    addWord: (state, action: PayloadAction<IDictionary>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { addWord } = dictionary.actions;
export default dictionary.reducer;
