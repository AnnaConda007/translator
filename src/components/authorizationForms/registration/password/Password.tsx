import { TextField, Typography, Box } from '@mui/material';
import { formData } from '../Registration';
interface PasswordProps {
  formData: formData
  errorPasswordMessage: string
  onChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Password: React.FC<PasswordProps> = ({ formData, errorPasswordMessage, onChangeValue }) => {

  return (
    <Box>
      <TextField
        name="password"
        autoComplete='off'
        value={formData.password}
        onChange={onChangeValue}
        variant="outlined"
        label="Пароль"
        type="password"
        margin="normal"
      ></TextField>
      {formData.password.length > 0 && (
        <TextField
          name="reEnterPassword"
          autoComplete='off'
          value={formData.reEnterPassword}
          onChange={onChangeValue}
          variant="outlined"
          label="Введите пароль еще раз"
          type="password"
          margin="normal"
        ></TextField>
      )}
      <Typography variant="body2" component="p">
        {errorPasswordMessage}          </Typography>
    </Box>
  )
}
export default Password