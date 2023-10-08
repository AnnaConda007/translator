import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootStoreState } from "../redux/store";
import { setRussianWord, setForeignWord } from "../redux/translatorSlice";
import { cleanAndNormalize } from "../utils/cleanAndNormalizeWord";
import { translate } from "../utils/tranlslateAPI";

const useTranslate = () => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector(
    (state: RootStoreState) => state.language,
  );
  return async (word: string) => {
    if (!selectedLanguage) return;
    const formatedWord = cleanAndNormalize(word);
    const translation: string | null = await translate(
      selectedLanguage,
      formatedWord,
    );
    if (!translation) return;
    dispatch(setRussianWord(translation));
    dispatch(setForeignWord(formatedWord));
  };
};

export default useTranslate;
