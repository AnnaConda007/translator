import { useState } from "react";
import TranslationPopover from "../translation-tooltip/TranslationPopover";
import { Paper, Typography } from "@mui/material";
import Word from "../word/Word";
type TextSelectedTextProps = {
  currentPageText: string;
};

const TextSelectedBook: React.FC<TextSelectedTextProps> = ({
  currentPageText,
}) => {
  const [clickedWord, setclickedWord] = useState<string>("");
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);

  return (
    <Paper>
      <Typography variant="body1">
        {currentPageText.split("\n").map((paragraph, idx1) => (
          <span key={idx1}>
            {paragraph.split(/\s+/).map((word, idx2) => (
              <Word
                key={idx2}
                word={word}
                setclickedWord={setclickedWord}
                setAnchorEl={setAnchorEl}
              />
            ))}
            <br />
          </span>
        ))}
      </Typography>
      {clickedWord ? (
        <TranslationPopover anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
      ) : null}
    </Paper>
  );
};
export default TextSelectedBook;
