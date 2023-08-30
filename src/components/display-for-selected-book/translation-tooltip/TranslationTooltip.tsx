import { Popover } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button/Button";
import AdditionalTranslationInput from './additional-translation-input/AdditionalTranslationInput';
interface ITranslationPopover {
  anchorEl: Element | null;
  setAnchorEl: (el: HTMLSpanElement | null) => void;
  translatedWord: string;
}

const TranslationPopover: React.FC<ITranslationPopover> = ({
  anchorEl,
  setAnchorEl,
  translatedWord,
}) => {
  const [clickedNewTranslate, setClickedNewTranslate] = useState(false);

  const handleClosePopover = () => {
    setAnchorEl(null);
    setClickedNewTranslate(false)
  };

  const handleNewTranslation = () => {
    setClickedNewTranslate(true);
  };

  return (
    <>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div>
          <Button variant="outlined"> записать в словарь</Button>
          <Button variant="outlined" onClick={() => handleNewTranslation()}>
             перевести другое слово
          </Button>
          {translatedWord}
        </div>
        {clickedNewTranslate ? <AdditionalTranslationInput /> : null}
      </Popover>
    </>
  );
};

export default TranslationPopover;
