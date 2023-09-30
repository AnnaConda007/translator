import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootStoreState } from "../redux/store";
import { fetchAndSetDictionary } from "../utils/fetchAndSetDictionary";
import { fetchAndSetLibraryTitles } from '../utils/fetchAndSetLibraryTitles';
import { AppDispatch } from "../redux/store";
import { setLoaded } from '../redux/dictionarySlice';

export const useFetchBookAndDictionaryFromDatabase = () => {
  const dispatch: AppDispatch = useDispatch();
  const loaded = useSelector((state: RootStoreState) => state.dictionary.loaded)

  const dictionary = useSelector((state: RootStoreState) => state.dictionary.words);
  if (loaded) return


  dispatch(fetchAndSetLibraryTitles());

  if (dictionary.length === 0) {
    dispatch(fetchAndSetDictionary());
  }
  dispatch(setLoaded())
};
