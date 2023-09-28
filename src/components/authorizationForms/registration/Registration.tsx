import { Typography, Box } from '@mui/material';
import Login from './login/Login';
import Password from './password/Password';
import { useDispatch, useSelector, batch } from 'react-redux';
import { setErrorEmailMessage, setErrorPasswordMessage, setFormData } from '../../../redux/authorizationSlise';
import { IformData } from '../../../redux/authorizationSlise';
import RegistrationButton from './registrationButton/RegistrationButton';
import { useDoubleAuthenticationBeforeRegistraton } from '../../../hooks/autentiification/useDoubleAuthenticationAndRegister';
import AuthenticationCodeInput from './authenticationCode/AuthenticationCode';
import { RootStoreState } from '../../../redux/store';

export interface formData {
  login: string,
  password: string,
  reEnterPassword: string
}

const Registration = () => {
  const dispatch = useDispatch()
  const registrate = useDoubleAuthenticationBeforeRegistraton()
  const authCodeInputToggle = useSelector((state: RootStoreState) => state.visibility.authCodeInput)
  const onSubmit = async () => {
    await registrate()
  }

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    batch(() => {
      dispatch(setFormData({ name: name as keyof IformData, value }));
      dispatch(setErrorEmailMessage(""))
      dispatch(setErrorPasswordMessage("")
      )
    })
  }

  return (
    <Box>
      <Typography variant="h5" component="h2">
        Регистрация нового пользователя
      </Typography>
      <form onSubmit={e => {
        e.preventDefault();
        onSubmit()

      }}>
        <Login onChangeValue={onChangeValue} />
        <Password onChangeValue={onChangeValue} />
        <RegistrationButton />
      </form>
      {authCodeInputToggle && (<AuthenticationCodeInput />)}
    </Box>
  )


}

export default Registration