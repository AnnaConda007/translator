import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { CountAction } from "../components/enum";
export interface dataFromBD {
  counter: number;
  russianWord: string;
  translatedWord: string;
}
export interface IEntry {
  russianWord: string;
  translatedWord: string;
}

interface updateCounterAction {
  translatedWord: string;
  count: CountAction;
}

export interface ICounter {
  [translatedWord: string]: number;
}
export type IDictionary = {
  words: Array<IEntry>;
  counters: ICounter;
};

const initialState: IDictionary = {
  words: [],
  counters: {},
};

const dictionary = createSlice({
  name: "dictionary",
  initialState,
  reducers: {
    setDictionary: (state, action: PayloadAction<Array<dataFromBD>>) => {
      action.payload.forEach((action) => {
        const entry: IEntry = {
          russianWord: action.russianWord,
          translatedWord: action.translatedWord,
        };
        state.words.push(entry);
        state.counters[action.translatedWord] = action.counter;
      });
    },
    addWord: (state, action: PayloadAction<IEntry>) => {
      state.words.push(action.payload);
      state.counters[action.payload.translatedWord] = 0;
    },
    removeWord: (state, action: PayloadAction<number>) => {
      const wordToRemove = state.words[action.payload].translatedWord;
      state.words.splice(action.payload, 1);
      delete state.counters[wordToRemove];
    },
    updateCounter: (state, action: PayloadAction<updateCounterAction>) => {
      state.counters[action.payload.translatedWord] += action.payload.count;
    },
  },
});

export const { setDictionary, addWord, removeWord, updateCounter } =
  dictionary.actions;
export default dictionary.reducer;
