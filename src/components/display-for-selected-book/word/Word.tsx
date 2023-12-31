import React from "react";
import useTranslate from "../../../hooks/useTranslate";

interface IWord {
  word: string;
  getSelectedWords: () => string;
  setClickedWord: (arg: string) => void;
  setAnchorEl: (arg: HTMLSpanElement) => void;
}

const Word: React.FC<IWord> = ({
  word,
  getSelectedWords,
  setClickedWord,
  setAnchorEl,
}) => {
  const toTranslate = useTranslate();

  const handleWordClick = async (
    word: string,
    {
      currentTarget,
    }: React.MouseEvent<HTMLSpanElement> | React.TouchEvent<HTMLSpanElement>,
  ) => {
    const selectedText = getSelectedWords();
    const wordToTranslate = selectedText || word;
    await toTranslate(wordToTranslate);
    setClickedWord(word);
    setAnchorEl(currentTarget);
  };

  return (
    <span
      style={{
        cursor: "pointer",
        marginRight: "5px",
        display: "inline-block",
      }}
      onMouseUp={async (e) => handleWordClick(word, e)}
      onTouchStart={async (e) => handleWordClick(word, e)}
    >
      {word}
      &nbsp;
    </span>
  );
};

const MemoizedWord = React.memo(Word);

export default MemoizedWord;
