import { configureStore } from "@reduxjs/toolkit";

import selectedBookSlice from "./selectedBookSlice";
import allLoadedBooksSlice from "./allLoadedBooksSlice";
import listOfBookTitlesSlice from "./listOfBookTitlesSlice";
const store = configureStore({
  reducer: {
    book: selectedBookSlice,
    books: allLoadedBooksSlice,
    titleList: listOfBookTitlesSlice,
  },
});
export type RootStoreState = ReturnType<typeof store.getState>;

export default store;
