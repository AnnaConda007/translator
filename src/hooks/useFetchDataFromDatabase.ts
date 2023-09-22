import { useEffect } from "react";
import { useDispatch, shallowEqual } from "react-redux";
import { IBooks } from "../redux/librarySlice";
import { useSelector } from "react-redux";
import { RootStoreState } from "../redux/store";
import { fetchAndSetDictionary, fetchAndSetLibrary } from "../utils/fetchBD";
import { AppDispatch } from "../redux/store";

export const useFetchBooksFromDatabase = () => {
  const dispatch: AppDispatch = useDispatch();
  const loadedBooks: IBooks = useSelector(
    (state: RootStoreState) => state.library.books,
    shallowEqual
  );
  useEffect(() => {
    if (Object.keys(loadedBooks).length > 0) return;
    dispatch(fetchAndSetLibrary());
  }, [dispatch, loadedBooks]);
};

export const useFetchDictionaryFromDatabase = () => {
  const dispatch: AppDispatch = useDispatch();
  const dictionary = useSelector((state: RootStoreState) => state.dictionary.words);
  useEffect(() => {
    if (dictionary.length > 0) return;
    dispatch(fetchAndSetDictionary());
  }, [dictionary, dispatch]);
};

export const useFetchBookAndDictionaryFromDatabase = () => {
  useFetchBooksFromDatabase();
  useFetchDictionaryFromDatabase();
};
