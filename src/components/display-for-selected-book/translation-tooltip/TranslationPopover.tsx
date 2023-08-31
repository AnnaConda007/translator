import { Popover } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button/Button";
import AdditionalTranslationInput from "./additional-translation-input/AdditionalTranslationInput";
import { useSelector } from "react-redux";
import { RootStoreState } from "../../../redux/store";
import ButtonAddToAddDtionary from "../button-add-to-dictionary/ButtonAddTodiDtionary";
interface ITranslationPopover {
  anchorEl: Element | null;
  setAnchorEl: (el: HTMLSpanElement | null) => void;
}

const TranslationPopover: React.FC<ITranslationPopover> = ({
  anchorEl,
  setAnchorEl,
}) => {
  const [clickedNewTranslate, setClickedNewTranslate] = useState(false);
  const translatedWord = useSelector(
    (state: RootStoreState) => state.translator.translatedWord
  );
  const handleClosePopover = () => {
    setAnchorEl(null);
    setClickedNewTranslate(false);
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
          <ButtonAddToAddDtionary />
          <Button variant="outlined" onClick={() => handleNewTranslation()}>
            перевести другое слово на английский
          </Button>
          {translatedWord}
        </div>
        {clickedNewTranslate ? <AdditionalTranslationInput /> : null}
      </Popover>
    </>
  );
};

export default TranslationPopover;
