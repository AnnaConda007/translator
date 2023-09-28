import { Box, Button } from '@mui/material'
import RegistrationForm from './registration/RegistrationForm'
import AuthorizationForm from './authorization/AuthorizationForm'

const Authentication = () => {
  return (
    <Box>
      <Button variant='contained'   > Регистрация</Button>
      <RegistrationForm />

      <Button variant='contained'   > Войти</Button>
      <AuthorizationForm/>
    </Box>
  )
}

export default Authentication