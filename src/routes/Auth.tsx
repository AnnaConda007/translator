import { Box, Button } from '@mui/material/';
import SignInForm from '../components/auth/signIn/SignIn';
import SignUpForm from '../components/auth/signUp/SignUp';
const Auth = () => {

  return (
    <Box>
      <Button variant='contained'   > Регистрация</Button>
      <SignUpForm />

      <Button variant='contained'   > Войти</Button>
      <SignInForm />
    </Box>
  )
}


export default Auth