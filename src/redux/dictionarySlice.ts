import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface IEntry {
  [key: string]: string;
}

export type IDictionary = Array<IEntry>;

 
const initialState: IDictionary = [];

const dictionary = createSlice({
  name: "dictionary",
  initialState,
  reducers: {
    setDictionary: (state, action: PayloadAction<Array<IEntry>>) => {
      return action.payload;
    },
    addWord: (state, action: PayloadAction<IEntry>) => {
      state.push(action.payload);
    },
    removeWord: (state, action: PayloadAction<number>) => {
      state.splice(action.payload, 1);
    },
  },
});

export const { setDictionary, addWord, removeWord } = dictionary.actions;
export default dictionary.reducer;
