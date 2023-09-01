import { translate } from "../../../utils/tranlslateAPI";
import { useDispatch, useSelector } from "react-redux";
import {
  setTranslatedWord,
  setTranslationWord,
} from "../../../redux/translatedWordSlice";
import { RootStoreState } from "../../../redux/store";
interface IWord {
  word: string;
  setclickedWord: (arg: string) => void;
  setAnchorEl: (arg: HTMLSpanElement) => void;
}

const Word: React.FC<IWord> = ({ word, setclickedWord, setAnchorEl }) => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector(
    (state: RootStoreState) => state.language
  );

  const handleWord = async (
    word: string,
    { currentTarget }: React.MouseEvent<HTMLSpanElement>
  ) => {
    if (!selectedLanguage) return;
    const target = currentTarget;
    const translation: string | null = await translate(selectedLanguage, word);
    if (!translation) return;
    dispatch(setTranslatedWord(translation));
    dispatch(setTranslationWord(word));
    setclickedWord(word);
    setAnchorEl(target);
  };

  return (
    <span
      style={{
        cursor: "pointer",
        marginRight: "5px",
        display: "inline-block",
      }}
      onClick={async (e) => handleWord(word, e)}
    >
      {word}
      &nbsp;
    </span>
  );
};

export default Word;
