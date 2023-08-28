import { configureStore } from "@reduxjs/toolkit";

import selectedBookSlice from './selectedBookSlice';
import allLoadedBooksSlice from "./allLoadedBooksSlice";
const store = configureStore({
  reducer: {
    book: selectedBookSlice,
    books: allLoadedBooksSlice,
  },
});
export type RootStoreState = ReturnType<typeof store.getState>;

export default store;
