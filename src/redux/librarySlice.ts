import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface IBooks {
  [key: string]: string;
}

interface IInitialState {
  books: IBooks;
  titlesBook: Array<string>;
}

const initialState: IInitialState = {
  books: {},
  titlesBook: [],
};
const librarySlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setBooks: (state, action: PayloadAction<IBooks>) => {
      state.books = { ...state.books, ...action.payload };
    },
    setTitles: (state, action: PayloadAction<Array<string>>) => {
      state.titlesBook = action.payload;
    },
    addNewBook: (state, action: PayloadAction<{ title: string, bookContent: string }>) => {
      const { title, bookContent } = action.payload;
      state.books[title] = bookContent;
      state.titlesBook.push(title);
    },
  }
});
export const { setBooks, setTitles, addNewBook } = librarySlice.actions;
export default librarySlice.reducer;
