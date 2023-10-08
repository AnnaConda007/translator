import { useRef } from "react";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { StyledLanguageButton } from "./LaguageButtonStyled";
import theme from "../../../../muiThem";
import { setActiveLanguageBox } from "../../../../redux/languageUpdateSlice";
import { RootStoreState } from "../../../../redux/store";
import LanguageBox from "../language-box/LanguageBox";

const LanguageButton: React.FC = () => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector(
    (state: RootStoreState) => state.language,
  );
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const activeLanguageBox: boolean = useSelector(
    (state: RootStoreState) => state.languageBox.activeLanguageBox,
  );

  const toggleVisibilityUpdateLang = () => {
    dispatch(setActiveLanguageBox(!activeLanguageBox));
  };

  return (
    <Box>
      <StyledLanguageButton
        sx={{
          backgroundColor: activeLanguageBox
            ? theme.palette.primary.main
            : "transparent",
        }}
        onClick={toggleVisibilityUpdateLang}
        ref={buttonRef}
      >
        {selectedLanguage}
      </StyledLanguageButton>
      {activeLanguageBox && <LanguageBox buttonRef={buttonRef} />}
    </Box>
  );
};

export default LanguageButton;
