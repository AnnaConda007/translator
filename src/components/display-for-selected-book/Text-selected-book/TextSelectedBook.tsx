import { useState } from "react";
import { Paper, Typography } from "@mui/material";
import styles from "./TextSelectedBook.module.css";
import TranslationPopover from "../translation-popover/TranslationPopover";
import Word from "../word/Word";

type TextSelectedTextProps = {
  currentPageText: string;
};

const TextSelectedBook: React.FC<TextSelectedTextProps> = ({
  currentPageText,
}) => {
  const [clickedWord, setClickedWord] = useState<string>("");
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const selectedText = (): string => {
    const text = window.getSelection()?.toString().trim() || "";
    return text;
  };

  return (
    <Paper  
    
      className={styles.paper}
      onMouseUp={selectedText}
      onTouchEnd={selectedText}
    >
      <Typography variant="body1">
        {currentPageText.split("\n").map((paragraph, idx1) => (
          <span key={idx1}>
            {paragraph.split(/\s+/).map((word, idx2) => (
              <Word
                key={idx2}
                word={word}
                setClickedWord={setClickedWord}
                setAnchorEl={setAnchorEl}
                getSelectedWords={selectedText}
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
