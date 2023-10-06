import { configureStore } from "@reduxjs/toolkit";
import librarySlice from './librarySlice';
import dictionarySlice from "./dictionarySlice";
import wordsSlice from "./translatorSlice";
import selectedLanguageSlice from "./languageSlice";
import visibilitySlice from "./visibilitySlice ";
import testSlice from "./testSlice";
import authSlise from './authSlise';
import languageUpdateSlice from './languageUpdateSlice';
const store = configureStore({
  reducer: {
    library: librarySlice,
    dictionary: dictionarySlice,
    translator: wordsSlice,
    language: selectedLanguageSlice,
    visibility: visibilitySlice,
    test: testSlice,
    authorization: authSlise,
    languageBox: languageUpdateSlice
  },
});
export type RootStoreState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
