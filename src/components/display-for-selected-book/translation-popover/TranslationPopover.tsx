import { Popover } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button/Button";
import TranslationInput from '../../translation-input/TranslationInput';
import { useSelector } from "react-redux";
import { RootStoreState } from "../../../redux/store";
import ButtonAddToDictionary from "../button-add-to-dictionary/ButtonAddToDictionary";
interface ITranslationPopover {
  anchorEl: Element | null;
  setAnchorEl: (el: HTMLSpanElement | null) => void;
}

const TranslationPopover: React.FC<ITranslationPopover> = ({
  anchorEl,
  setAnchorEl,
}) => {
  const [openAdditionalTranslation, setOpenAdditionalTranslation] =
    useState(false);
  const translatedWord = useSelector(
    (state: RootStoreState) => state.translator.russianWord
  );
  console.log(translatedWord)
  const handleClosePopover = () => {
    setAnchorEl(null);
    setOpenAdditionalTranslation(false);
  };
  const handleNewTranslation = () => {
    setOpenAdditionalTranslation(true);
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
          <ButtonAddToDictionary />
          <Button variant="outlined" onClick={() => handleNewTranslation()}>
            перевести другое слово на английский
          </Button>
          {translatedWord}
        </div>
        {openAdditionalTranslation ? <TranslationInput /> : null}
      </Popover>
    </>
  );
};

export default TranslationPopover;
