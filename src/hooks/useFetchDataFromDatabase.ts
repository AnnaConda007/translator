import { useDispatch, shallowEqual } from "react-redux";
import { IBooks } from "../redux/librarySlice";
import { useSelector } from "react-redux";
import { RootStoreState } from "../redux/store";
import { fetchAndSetDictionary, fetchAndSetLibrary } from "../utils/fetchBD";
import { AppDispatch } from "../redux/store";
import { setLoaded } from '../redux/dictionarySlice';

export const useFetchBookAndDictionaryFromDatabase = () => {
  const dispatch: AppDispatch = useDispatch();
  const loaded = useSelector((state: RootStoreState) => state.dictionary.loaded)
  const loadedBooks: IBooks = useSelector(
    (state: RootStoreState) => state.library.books,
    shallowEqual
  );
  const dictionary = useSelector((state: RootStoreState) => state.dictionary.words);
  if (loaded) return
  if (Object.keys(loadedBooks).length === 0) {
    dispatch(fetchAndSetLibrary());
  }
  if (dictionary.length === 0) {
    dispatch(fetchAndSetDictionary());
  }
  dispatch(setLoaded())
};
