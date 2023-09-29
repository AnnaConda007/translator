import { useDispatch, shallowEqual } from "react-redux";
import { IBooks } from "../redux/librarySlice";
import { useSelector } from "react-redux";
import { RootStoreState } from "../redux/store";
import { fetchAndSetDictionary, fetchAndSetLibrary } from "../utils/fetchBD";
import { AppDispatch } from "../redux/store";
import { AuthType } from '../enums/authEnum';


export const useFetchBooksFromDatabase = () => {
  const dispatch: AppDispatch = useDispatch();
  const loadedBooks: IBooks = useSelector(
    (state: RootStoreState) => state.library.books,
    shallowEqual
  );
  return () => {
    if (Object.keys(loadedBooks).length > 0) return;
    dispatch(fetchAndSetLibrary());
  };
};

export const useFetchDictionaryFromDatabase = () => {
  const dispatch: AppDispatch = useDispatch();
  const dictionary = useSelector((state: RootStoreState) => state.dictionary.words);
  return () => {
    if (dictionary.length > 0) return;
    dispatch(fetchAndSetDictionary());
  };
};

export const useFetchBookAndDictionaryFromDatabase = () => {
  const fetchBooks = useFetchBooksFromDatabase()
  const fetchDictioary = useFetchDictionaryFromDatabase()
  const authType = useSelector((state: RootStoreState) => state.authorization.authType)
  const selectedLanguage = useSelector((state: RootStoreState) => state.language)
  return () => {
    const fetchData = () => {
      fetchBooks();
      fetchDictioary();
    }
    if (authType === AuthType.SIGN_UP && selectedLanguage) {
      fetchData()
    } else if (authType === AuthType.SIGN_IN) {
      fetchData()
    }
  }
};


