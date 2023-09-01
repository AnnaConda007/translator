import { configureStore } from "@reduxjs/toolkit";
import allLoadedBooksSlice from "./allLoadedBooksSlice";
import listOfBookTitlesSlice from "./listOfBookTitlesSlice";
import dictionarySlice from "./dictionarySlice";
import wordsSlice from "./translatedWordSlice";
import selectedLanguageSlice from "./languageSlice";
import menuItemSlice from "./menuItemSlice";
const store = configureStore({
  reducer: {
    books: allLoadedBooksSlice,
    titleList: listOfBookTitlesSlice,
    dictionary: dictionarySlice,
    translator: wordsSlice,
    language: selectedLanguageSlice,
    menuItem: menuItemSlice,
  },
});
export type RootStoreState = ReturnType<typeof store.getState>;

export default store;
