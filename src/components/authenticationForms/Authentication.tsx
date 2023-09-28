import { Box, Button } from '@mui/material'
import SignUpForm from './signUp/SignUpForm'
import SignInForm from './authorization/SignInForm'

const Authentication = () => {
  return (
    <Box>
      <Button variant='contained'   > Регистрация</Button>
      <SignUpForm />

      <Button variant='contained'   > Войти</Button>
      <SignInForm />
    </Box>
  )
}

export default Authentication