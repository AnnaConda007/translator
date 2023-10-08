import { useSelector, useDispatch } from "react-redux";
import { RootStoreState } from "../../redux/store";
import { setRussianWord, setForeignWord } from "../../redux/translatorSlice";
import { toggleTranslationInputVisibility } from "../../redux/visibilitySlice ";
import { translate } from "../../utils/tranlslateAPI";

export const useHandleTranslate = () => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector(
    (state: RootStoreState) => state.language,
  );
  return async (valueInput: string) => {
    if (!selectedLanguage) return;
    const translateResult: string | null = await translate(
      selectedLanguage,
      valueInput,
    );
    if (!translateResult) return;
    dispatch(setForeignWord(valueInput));
    dispatch(setRussianWord(translateResult));
    dispatch(toggleTranslationInputVisibility(true));
  };
};
