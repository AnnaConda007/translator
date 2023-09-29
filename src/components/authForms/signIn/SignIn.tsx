import { Box } from '@mui/material';
import AuthLogin from '../authLogin/AuthLogin';
import AuthPassword from '../authPassword/AuthPassword';
import AutButton from '../authButton/AuthButton';
import { useSignIn } from '../../../hooks/autentiification/useSignIn';

const SignInForm = () => {
  const signIn = useSignIn()
  const onSubmit = async () => {
     signIn()
  }
  return (
    <Box>
      <form onSubmit={e => {
        e.preventDefault();
        onSubmit()
      }}>
        <AuthLogin />
        <AuthPassword reEnterPassword={false} />
        <AutButton valueButton={"войти"} />
      </form>

    </Box>
  )

}

export default SignInForm