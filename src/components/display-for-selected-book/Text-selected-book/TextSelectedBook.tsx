import { useState } from "react";
import { translate } from "../../../utils/tranlslateAPI";
import TranslationTooltip from "../translation-tooltip/TranslationTooltip";
type TextSelectedTextProps = {
  currentPageText: string;
};
const TextSelectedBook: React.FC<TextSelectedTextProps> = ({
  currentPageText,
}) => {
  const [translatedWord, setTranslatedWord] = useState<string>("");
  const [clickedWord, setclickedWord] = useState<string>("");

  const handleWord = async (word: string) => {
    const translation: string | null = await translate(word);
    if (!translation) return;
    setTranslatedWord(translation);
    setclickedWord(word);
  };
  return (
    <div>
      {currentPageText.split("\n").map((paragraph, idx1) => (
        <span key={idx1}>
          {paragraph.split(/\s+/).map((word, idx2) => (
            <span
              key={idx2}
              style={{
                cursor: "pointer",
                marginRight: "5px",
                display: "inline-block",
                position: "relative",
              }}
              onClick={async () => handleWord(word)}
            >
              {word === clickedWord && translatedWord ? (
                <TranslationTooltip translatedWord={translatedWord} />
              ) : null}
              {word}
              &nbsp;
            </span>
          ))}
          <br />
        </span>
      ))}
    </div>
  );
};
export default TextSelectedBook;
