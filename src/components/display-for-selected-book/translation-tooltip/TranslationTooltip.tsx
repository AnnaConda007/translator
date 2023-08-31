import { Popover } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button/Button";
import AdditionalTranslationInput from "./additional-translation-input/AdditionalTranslationInput";
import { useDispatch } from "react-redux";
import { addWord } from "../../../redux/dictionarySlice";

interface ITranslationPopover {
  anchorEl: Element | null;
  setAnchorEl: (el: HTMLSpanElement | null) => void;
  translatedWord: string;
  translationWord: string;
}

const TranslationPopover: React.FC<ITranslationPopover> = ({
  anchorEl,
  setAnchorEl,
  translatedWord,
  translationWord,
}) => {
  const [clickedNewTranslate, setClickedNewTranslate] = useState(false);
  const dispatch = useDispatch();
  const handleClosePopover = () => {
    setAnchorEl(null);
    setClickedNewTranslate(false);
  };

  const handleButtonAddInDictionary = () => {
    dispatch(addWord({ [translationWord]: translatedWord }));
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
          <Button
            variant="outlined"
            onClick={() => handleButtonAddInDictionary()}
          >
            записать в словарь
          </Button>
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
