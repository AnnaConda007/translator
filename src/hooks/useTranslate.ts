import { translate } from "../utils/tranlslateAPI";
import { useSelector } from "react-redux";
import { RootStoreState } from "../redux/store";
import { cleanAndNormalize } from "../utils/cleanAndNormalizeWord";
import { useDispatch } from "react-redux";
import { setRussianWord, setForeignWord } from "../redux/translatorSlice";

const useTranslate = () => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector(
    (state: RootStoreState) => state.language
  );
  const translateWord = async (word: string) => {
    if (!selectedLanguage) return;
    console.log("translateWord", word)
    const formatedWord = cleanAndNormalize(word);
    const translation: string | null = await translate(
      selectedLanguage,
      formatedWord
    );
    if (!translation) return;
    dispatch(setRussianWord(translation));
    dispatch(setForeignWord(formatedWord));
  };
  return translateWord;
};

export default useTranslate;
