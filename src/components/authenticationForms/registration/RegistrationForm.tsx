import { Box } from '@mui/material';
import RegistrationLogin from './registrationLogin/RegistrationLogin';
import RegistrationPassword from './registrationPassword/registrationPassword';
import { useSelector } from 'react-redux';
import RegistrationButton from './registrationButton/RegistrationButton';
import { useDoubleAuthenticationBeforeRegistraton } from '../../../hooks/autentiification/useDoubleAuthenticationr';
import AuthenticationCodeInput from './authenticationCode/AuthenticationCode';
import { RootStoreState } from '../../../redux/store';

const RegistrationForm = () => {
  const doubleAuthentication = useDoubleAuthenticationBeforeRegistraton()
  const authCodeInputToggle = useSelector((state: RootStoreState) => state.visibility.authCodeInput)
  const onSubmit = async () => {
    await doubleAuthentication()
  }

  return (
    <Box>
      <form onSubmit={e => {
        e.preventDefault();
        onSubmit()
      }}>
        <RegistrationLogin />
        <RegistrationPassword />
        <RegistrationButton />
      </form>
      {authCodeInputToggle && (<AuthenticationCodeInput />)}
    </Box>



  )


}

export default RegistrationForm