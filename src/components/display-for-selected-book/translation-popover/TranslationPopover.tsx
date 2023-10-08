import { useState } from "react";
import { Popover, Box, Typography } from "@mui/material";
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
    (state: RootStoreState) => state.translator.russianWord,
  );
  const handleClosePopover = () => {
    setAnchorEl(null);
    setOpenAdditionalTranslation(false);
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
                <Typography
                  sx={{ paddingRight: "50px" }}
                  gutterBottom
                  variant="body1"
                  component="span"
                >
                  {translatedWord}
                </Typography>
                <ButtonAddToDictionary />
              </Box>
            </>
          )}
        </Box>
      </Popover>
    </>
  );
};

export default TranslationPopover;
