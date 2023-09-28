import { Typography, TextField, Button, Box } from '@mui/material';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootStoreState } from '../../../../redux/store';
import { useSignUp } from '../../../../hooks/autentiification/useSignUp';
import { repeatCodeAuthentication } from '../../../../hooks/autentiification/useDoubleAuthenticationr';

const AuthenticationCodeInput: React.FC = () => {
  const registrate = useSignUp()
  const repeatCode = repeatCodeAuthentication()
  const [authenticationCodeValue, setAuthenticationCodeValue] = useState("")
  const [errorText, setErrorText] = useState("")
  const [seconds, setSeconds] = useState(90);
  const sendedAutentificationCode = useSelector((state: RootStoreState) => state.authorization.autentificationCode)
  const onChange = (value: string) => {
    setAuthenticationCodeValue(value)
    setErrorText("")
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds > 0 ? prevSeconds - 1 : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleMatchCodsButton = () => {
    if (sendedAutentificationCode != authenticationCodeValue) {
      setErrorText("неверный код")
      return
    } else registrate()
  }

  const handleRepeatCodeButton = () => {
    repeatCode()
  }
  return (
    <>
      <Typography variant="body2" component="p">
        Введите код, отправленный на почту пропс формДаты
      </Typography>
      <form onSubmit={e => {
        e.preventDefault();
        handleMatchCodsButton()
      }}>
        <Box>
          <TextField
            autoComplete='off'
            value={authenticationCodeValue}
            onChange={(e) => onChange(e.target.value)}
            variant="outlined"
            margin="normal"
          ></TextField>
          <Typography variant="body2" component="p">
            Вы можете запросить повторный код через {seconds} секунд
          </Typography>
          <Typography variant="body2" component="p">{errorText}
          </Typography>
        </Box>
        <Button type="submit" variant='contained'>продолжить </Button>
      </form >
      
      {seconds === 0 && (<Button variant='contained' onClick={handleRepeatCodeButton}  >Запросить код  </Button>)}





    </>
  )
}
export default AuthenticationCodeInput