import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { ITestResult } from "./testSlice";
export interface dataFromBD {
  counter: number;
  russianWord: string;
  foreignWord: string;
}
export interface IEntry {
  russianWord: string;
  foreignWord: string;
}

export interface ICounter {
  [foreignWord: string]: number;
}
export type IDictionary = {
  words: Array<IEntry>;
  counters: ICounter;
  loaded: boolean
};

const initialState: IDictionary = {
  words: [],
  counters: {},
  loaded: false
};

const dictionary = createSlice({
  name: "dictionary",
  initialState,
  reducers: {
    setDictionary: (state, action: PayloadAction<Array<dataFromBD>>) => {
      action.payload.forEach((dataEntry) => {
        const entry: IEntry = {
          russianWord: dataEntry.russianWord,
          foreignWord: dataEntry.foreignWord,
        };
        state.words.push(entry);
        state.counters[dataEntry.foreignWord] = dataEntry.counter;
      });
    },
    clearDictionary: (state) => {
      state.words = [];
      state.counters = {};
    },
    addWord: (state, action: PayloadAction<IEntry>) => {
      state.words.push(action.payload);
      state.counters[action.payload.foreignWord] = 0;
    },
    removeWord: (state, action: PayloadAction<string>) => {
      state.words = state.words.filter(
        (word) => word.foreignWord !== action.payload
      );
      delete state.counters[action.payload];
    },
    updateCounter: (state, action: PayloadAction<Array<ITestResult>>) => {
      const wordsToDelete = new Set<string>();
      action.payload.forEach((result) => {
        const foreignWord = result.foreignWord;
        state.counters[foreignWord] += result.correctAnswer ? 1 : -1;
        if (state.counters[foreignWord] > 3) {
          delete state.counters[foreignWord];
          wordsToDelete.add(foreignWord);
        }
      });
      state.words = state.words.filter(
        (word) => !wordsToDelete.has(word.foreignWord)
      );
    },
    setLoaded: (state ) => {
      state.loaded = true
    },
  },
});

export const { setDictionary, addWord, removeWord, updateCounter, clearDictionary, setLoaded } =
  dictionary.actions;
export default dictionary.reducer;
