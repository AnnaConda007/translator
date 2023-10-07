import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface IBooks {
  [key: string]: string;
}

interface IInitialState {
  titlesBook: Array<string>;
  selectedBookText: string;
  filteredTitles: Array<string>;
}

const initialState: IInitialState = {
  selectedBookText: "",
  titlesBook: [],
  filteredTitles: [],
};
const librarySlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setTitles: (state, action: PayloadAction<Array<string>>) => {
      state.titlesBook = action.payload;
      state.filteredTitles = action.payload;
    },
    setFiltered: (state, action: PayloadAction<Array<string>>) => {
      state.filteredTitles = action.payload;
    },
    addTitles: (state, action: PayloadAction<string>) => {
      state.filteredTitles = [...state.filteredTitles, action.payload];
    },
    setSelectedBookText: (state, action: PayloadAction<string>) => {
      state.selectedBookText = action.payload;
    },
    deliteTitle: (state, action: PayloadAction<string>) => {
      state.filteredTitles = state.filteredTitles.filter(
        (title) => title !== action.payload,
      );
    },
    resetLibrary: (state) => {
      (state.selectedBookText = ""),
      (state.titlesBook = []),
      (state.filteredTitles = []);
    },
  },
});
export const {
  setTitles,
  addTitles,
  setFiltered,
  setSelectedBookText,
  deliteTitle,
  resetLibrary,
} = librarySlice.actions;
export default librarySlice.reducer;
