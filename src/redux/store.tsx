import { configureStore } from "@reduxjs/toolkit";
import allLoadedBooksSlice from "./allLoadedBooksSlice";
import listOfBookTitlesSlice from "./listOfBookTitlesSlice";

const store = configureStore({
  reducer: {
    books: allLoadedBooksSlice,
    titleList: listOfBookTitlesSlice,
  },
});
export type RootStoreState = ReturnType<typeof store.getState>;

export default store;
