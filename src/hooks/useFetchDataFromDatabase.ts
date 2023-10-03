import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootStoreState } from "../redux/store";
import { getAndSetDictionary } from "../utils/getAndSetDictionary";
import { getAndSetLibraryTitles } from '../utils/getAndSetLibraryTitles';
import { AppDispatch } from "../redux/store";
import { setLoaded } from '../redux/authSlise';

export const useFetchBookAndDictionaryFromDatabase = () => {
  const dispatch: AppDispatch = useDispatch();
  const loaded = useSelector((state: RootStoreState) => state.authorization.loaded)

  const dictionary = useSelector((state: RootStoreState) => state.dictionary.words);
  if (loaded) return


  dispatch(getAndSetLibraryTitles());

  if (dictionary.length === 0) {
    dispatch(getAndSetDictionary());
  }
  dispatch(setLoaded())
};
