import { useState, useEffect } from "react";
import { Typography, TextField, Button, Box, IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import { repeatCodeAuthentication } from "../../../../hooks/autentiification/useDoubleAuthenticationr";
import { useSignUp } from "../../../../hooks/autentiification/useSignUp";
import { RootStoreState } from "../../../../redux/store";
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';

const AuthenticationCodeInput: React.FC = () => {
  const registrate = useSignUp();
  const repeatCode = repeatCodeAuthentication();
  const [authenticationCodeValue, setAuthenticationCodeValue] = useState("");
  const [errorText, setErrorText] = useState("");
  const [seconds, setSeconds] = useState(90);
  const sendedAutentificationCode = useSelector(
    (state: RootStoreState) => state.authorization.autentificationCode,
  );
  const onChange = (value: string) => {
    setAuthenticationCodeValue(value);
    setErrorText("");
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => (prevSeconds > 0 ? prevSeconds - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleMatchCodsButton = () => {
    if (sendedAutentificationCode !== authenticationCodeValue) {
      setErrorText("неверный код");
      return;
    } else registrate();
  };

  const handleRepeatCodeButton = () => {
    repeatCode();
    setSeconds(90)
  };
  return (
    <Box>
      <Typography variant="body2" component="p">
        Введите код, отправленный на почту
      </Typography>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleMatchCodsButton();
        }}
      >
        <Box>
          <TextField
            autoComplete="off"
            value={authenticationCodeValue}
            onChange={(e) => onChange(e.target.value)}
            variant="outlined"
            margin="normal"
          ></TextField>
          <Typography variant="body2" component="p">
            Вы можете запросить повторный код через {seconds} секунд
          </Typography>
          <Typography variant="body2" component="p">
            {errorText}
          </Typography>
        </Box>
        <Box sx ={{display:"flex", justifyContent:"space-evenly"}}>
        <Button type="submit" variant="contained">
          продолжить{" "}
        </Button>
        {seconds === 0 && (
        <IconButton color="primary"  onClick={handleRepeatCodeButton}>
       <ReplayOutlinedIcon/>
        </IconButton>
      )}
        </Box>
      
      </form>

    </Box>
  );
};
export default AuthenticationCodeInput;
