import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookReduser";
const store = configureStore({
  reducer: {
    book: bookReducer,
  },
});

export default store;
