import { Box } from '@mui/material';
import AuthorizationLogin from './signInLogin/SignInLogin'
import AuthorizationPassword from './signInPassword/SignInPassword'

const SignInForm = () => {
  return (
    <Box>
      <form onSubmit={e => {
        e.preventDefault();
      }}>
        <AuthorizationLogin />
        <AuthorizationPassword />
      </form>
    </Box>
  )

}

export default SignInForm