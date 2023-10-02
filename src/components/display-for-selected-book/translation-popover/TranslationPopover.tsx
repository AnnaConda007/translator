import { Popover, Box, Typography } from "@mui/material";
import { useState } from "react";
import Button from "@mui/material/Button/Button";
import TranslationInput from "../../translation-input/TranslationInput";
import { useSelector } from "react-redux";
import { RootStoreState } from "../../../redux/store";
import ButtonAddToDictionary from "../../button-add-to-dictionary/ButtonAddToDictionary";
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
        <Box>
          {openAdditionalTranslation ? null : (
            <>
              <Box>
                <Typography gutterBottom variant="body1" component="span">{translatedWord}</Typography>
                <ButtonAddToDictionary />
              </Box>
              <Button variant="outlined" onClick={() => handleNewTranslation()}>
                еще
              </Button></>
          )}
        </Box>
        {openAdditionalTranslation ? <TranslationInput /> : null}
      </Popover>
    </>
  );
};

export default TranslationPopover;
