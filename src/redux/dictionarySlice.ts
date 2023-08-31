import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface IEntry {
  [key: string]: string;
}

export type IDictionary = Array<IEntry>;

const initialState: IDictionary = [{ mama: "mama" }, { mama: "mama" }];

const dictionary = createSlice({
  name: "dictionary",
  initialState,
  reducers: {
    addWord: (state, action: PayloadAction<IEntry>) => {
      state.push(action.payload);
    },
    removeWord: (state, action: PayloadAction<number>) => {
      state.splice(action.payload, 1);
    },
  },
});

export const { addWord , removeWord} = dictionary.actions;
export default dictionary.reducer;
