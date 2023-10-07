import { configureStore } from "@reduxjs/toolkit";
import authSlise from "./authSlise";
import dictionarySlice from "./dictionarySlice";
import selectedLanguageSlice from "./languageSlice";
import languageUpdateSlice from "./languageUpdateSlice";
import librarySlice from "./librarySlice";
import testSlice from "./testSlice";
import wordsSlice from "./translatorSlice";
import visibilitySlice from "./visibilitySlice ";
const store = configureStore({
  reducer: {
    library: librarySlice,
    dictionary: dictionarySlice,
    translator: wordsSlice,
    language: selectedLanguageSlice,
    visibility: visibilitySlice,
    test: testSlice,
    authorization: authSlise,
    languageBox: languageUpdateSlice,
  },
});
export type RootStoreState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
