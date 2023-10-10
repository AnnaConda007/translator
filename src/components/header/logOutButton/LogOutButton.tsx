import { Button } from "@mui/material";
import { useDispatch, batch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RoutesApp } from "../../../enums/routesAppEnum";
import { resetDictionary } from "../../../redux/dictionarySlice";
import { resetLanguage } from "../../../redux/languageSlice";
import { resetActiveCardNumber, resetTest } from "../../../redux/testSlice";
import { resetTranslator } from "../../../redux/translatorSlice";
import { resetVisibility } from "../../../redux/visibilitySlice ";
import { UserData } from '../../../enums/authEnum';

const LogOutButton = () => {
  const dispanch = useDispatch();
  const navigate = useNavigate(); 
  const userId = localStorage.getItem(UserData.USER_ID)

  const handleButtonLogOut = () => {
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

  const handleButtonAuth = ()=>{
    navigate(RoutesApp.AUTHORIZATION)
  }
  return (
    <>  
   {userId ? ( <Button variant="contained" onClick={handleButtonLogOut}>
      выйти
    </Button>) : (<Button variant="contained" onClick={handleButtonAuth}>
      Авторизация
    </Button>)} 
    </>
  );
};

export default LogOutButton;
