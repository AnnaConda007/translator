import { translate } from "../../../utils/tranlslateAPI";
interface IWord {
  word: string;
  setTranslatedWord: (arg: string) => void;
  setclickedWord: (arg: string) => void;
  setAnchorEl: (arg: HTMLSpanElement) => void;
}

const Word: React.FC<IWord> = ({
  word,
   setTranslatedWord,
  setclickedWord,
  setAnchorEl,
}) => {
  const handleWord = async (
    word: string,
    { currentTarget }: React.MouseEvent<HTMLSpanElement>
  ) => {
    const target = currentTarget;
    const translation: string | null = await translate(word);
    if (!translation) return;
    setTranslatedWord(translation);
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
