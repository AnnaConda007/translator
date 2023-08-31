import { useState } from "react";
import TranslationPopover from "../translation-tooltip/TranslationPopover";
import { Paper, Typography } from "@mui/material";
import Word from "../word/Word"; 
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootStoreState } from "../../../redux/store";
type TextSelectedTextProps = {
  currentPageText: string;
};
const TextSelectedBook: React.FC<TextSelectedTextProps> = ({
  currentPageText,
}) => {
  const [clickedWord, setclickedWord] = useState<string>("");
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
   const translationWord = useSelector(
    (state: RootStoreState) => state.translator.translationWord
  );
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
      {clickedWord && translationWord ? (
        <TranslationPopover anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
      ) : null}
    </Paper>
  );
};
export default TextSelectedBook;
