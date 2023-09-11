import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface IEntry {
  counter: number;
  russianWord: string;
  translatedWord: string;
}

interface IUpdatecounterAction {
  translatedWord: string;
  count: number;
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
    updateCounter: (state, action: PayloadAction<IUpdatecounterAction>) => {
      const entry = state.find((entry:IEntry) => entry.translatedWord === action.payload.translatedWord); 
      if (entry) {
          entry.counter  += action.payload.count;
      }
    },
  },
});

export const { setDictionary, addWord, removeWord, updateCounter } =
  dictionary.actions;
export default dictionary.reducer;
