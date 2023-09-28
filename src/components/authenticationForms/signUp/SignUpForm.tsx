import { Box } from '@mui/material';
import RegistrationLogin from './signUpLogin/SignUpLogin';
import SignUpPassword from './signUpPassword/SignUpPassword';
import { useSelector } from 'react-redux';
import SignUpButton from './signUpButton/SignUpButton';
import { useDoubleAuthentication } from '../../../hooks/autentiification/useDoubleAuthenticationr';
import AuthenticationCodeInput from './authenticationCode/AuthenticationCode';
import { RootStoreState } from '../../../redux/store';

const SignUpForm = () => {
  const doubleAuthentication = useDoubleAuthentication()
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
        <SignUpPassword />
        <SignUpButton />
      </form>
      {authCodeInputToggle && (<AuthenticationCodeInput />)}
    </Box>



  )


}

export default SignUpForm