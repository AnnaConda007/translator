import { TextField, Typography, Box } from '@mui/material';
import { formData } from '../Registration';

interface LoginProps {
  formData: formData
  onChangeValue: (e: React.ChangeEvent<HTMLInputElement>)
    => void
  errorEmailMessage: string
}
const Login: React.FC<LoginProps> = ({ formData, onChangeValue, errorEmailMessage }) => {

  return (
    <Box>    <TextField
      name="login"
      autoComplete='off'
      value={formData.login}
      onChange={onChangeValue}
      variant="outlined"
      label="Логин"
      margin="normal"
    ></TextField>
      <Typography variant="body2" component="p">
        {errorEmailMessage}          </Typography>
    </Box>
  )
}

export default Login