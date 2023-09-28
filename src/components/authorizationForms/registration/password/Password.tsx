import { TextField, Typography, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootStoreState } from '../../../../redux/store';
import { IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';
interface PasswordProps {
  onChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const Password: React.FC<PasswordProps> = ({ onChangeValue }) => {
  const [showPassword, setShowPassword] = useState(false);

  const errorPasswordMessage = useSelector((state: RootStoreState) => state.authorization.errorPasswordMessage)
  const formData = useSelector((state: RootStoreState) => state.authorization.formData)

  return (
    <Box>
      <TextField
        name="password"
        autoComplete='off'
        value={formData.password}
        onChange={onChangeValue}
        variant="outlined"
        label="Пароль"
        type={showPassword ? "text" : "password"}
        margin="normal"
        InputProps={{
          endAdornment: (
            <IconButton
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </IconButton>
          )
        }}

      ></TextField>
      {formData.password.length > 0 && (
        <TextField
          name="reEnterPassword"
          autoComplete='off'
          value={formData.reEnterPassword}
          onChange={onChangeValue}
          variant="outlined"
          label="Введите пароль еще раз"
          type={showPassword ? "text" : "password"}
          margin="normal"

        ></TextField>
      )}
      <Typography variant="body2" component="p">
        {errorPasswordMessage}          </Typography>
    </Box>
  )
}
export default Password