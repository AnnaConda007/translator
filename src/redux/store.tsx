import { configureStore } from "@reduxjs/toolkit";
import allLoadedBooksSlice from "./allLoadedBooksSlice";
import listOfBookTitlesSlice from "./listOfBookTitlesSlice";
import dictionarySlice from "./dictionarySlice";
import wordsSlice from "./translatedWordSlice";
import selectedLanguageSlice from "./languageSlice";
import visibilitySlice from "./visibilitySlice ";
const store = configureStore({
  reducer: {
    books: allLoadedBooksSlice,
    titleList: listOfBookTitlesSlice,
    dictionary: dictionarySlice,
    translator: wordsSlice,
    language: selectedLanguageSlice,
    visibility: visibilitySlice,
  },
});
export type RootStoreState = ReturnType<typeof store.getState>;

export default store;
