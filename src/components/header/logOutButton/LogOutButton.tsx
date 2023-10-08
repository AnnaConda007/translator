import { Button } from "@mui/material";
import { useDispatch, batch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RoutesApp } from "../../../enums/routesAppEnum";
import { resetDictionary } from "../../../redux/dictionarySlice";
import { resetLanguage } from "../../../redux/languageSlice";
import { resetActiveCardNumber, resetTest } from "../../../redux/testSlice";
import { resetTranslator } from "../../../redux/translatorSlice";
import { resetVisibility } from "../../../redux/visibilitySlice ";

const LogOutButton = () => {
  const dispanch = useDispatch();
  const navigate = useNavigate();
  const handleButton = () => {
    batch(() => {
      dispanch(resetActiveCardNumber());
      dispanch(resetDictionary());
      dispanch(resetLanguage());
      dispanch(resetTest());
      dispanch(resetVisibility());
      dispanch(resetTranslator());
    });
    navigate(RoutesApp.AUTHORIZATION);
    localStorage.clear();
  };
  return (
    <Button variant="contained" onClick={handleButton}>
      выйти
    </Button>
  );
};

export default LogOutButton;
