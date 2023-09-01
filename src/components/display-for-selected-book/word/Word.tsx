import { translate } from "../../../utils/tranlslateAPI";
import { useDispatch } from "react-redux";
import {
  setTranslatedWord,
  setTranslationWord,
} from "../../../redux/translatedWordSlice";

interface IWord {
  word: string;
  setclickedWord: (arg: string) => void;
  setAnchorEl: (arg: HTMLSpanElement) => void;
}

const Word: React.FC<IWord> = ({ word, setclickedWord, setAnchorEl }) => {
  const dispatch = useDispatch();
  
  const handleWord = async (
    word: string,
    { currentTarget }: React.MouseEvent<HTMLSpanElement>
  ) => {
    const target = currentTarget;
    const translation: string | null = await translate(word);
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
