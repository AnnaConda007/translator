import { useState } from "react";
import TranslationPopover from "../translation-tooltip/TranslationTooltip";
import { Paper, Typography } from "@mui/material";
import Word from "../word/Word";
type TextSelectedTextProps = {
  currentPageText: string;
};
const TextSelectedBook: React.FC<TextSelectedTextProps> = ({
  currentPageText,
}) => {
  const [translatedWord, setTranslatedWord] = useState<string>("");
  const [clickedWord, setclickedWord] = useState<string>("");
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);

  return (
    <Paper>
      <Typography variant="body1">
        {currentPageText.split("\n").map((paragraph, idx1) => (
          <span key={idx1}>
            {paragraph.split(/\s+/).map((word, idx2) => (
              <Word
                word={word}
                idx2={idx2}
                setTranslatedWord={setTranslatedWord}
                setclickedWord={setclickedWord}
                setAnchorEl={setAnchorEl}
              />
            ))}
            <br />
          </span>
        ))}
      </Typography>
      {clickedWord && translatedWord ? (
        <TranslationPopover
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          translatedWord={translatedWord}
        />
      ) : null}
    </Paper>
  );
};
export default TextSelectedBook;
