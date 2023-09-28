import { Box } from '@mui/material';
import AuthorizationLogin from './authorizationLogin/AuthorizationLogin'
import AuthorizationPassword from './AuthorizationPassword/AuthorizationPassword' 

const AuthorizationForm = () => {
  return (
    <Box>
      <form onSubmit={e => {
        e.preventDefault();
      }}>
        <AuthorizationLogin   />
        <AuthorizationPassword   />
       </form>
    </Box>
  )

}

export default AuthorizationForm