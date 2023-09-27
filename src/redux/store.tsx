import { configureStore } from "@reduxjs/toolkit";
import librarySlice from './librarySlice';
import dictionarySlice from "./dictionarySlice";
import wordsSlice from "./translatorSlice";
import selectedLanguageSlice from "./languageSlice";
import visibilitySlice from "./visibilitySlice ";
import testSlice from "./testSlice";
import authorizationSlise from './authorizationSlise';

const store = configureStore({
  reducer: {
    library: librarySlice,
    dictionary: dictionarySlice,
    translator: wordsSlice,
    language: selectedLanguageSlice,
    visibility: visibilitySlice,
    test: testSlice,
    authorization: authorizationSlise
  },
});
export type RootStoreState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
