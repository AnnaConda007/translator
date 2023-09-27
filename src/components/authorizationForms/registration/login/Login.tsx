
import { TextField, Typography, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootStoreState } from '../../../../redux/store';

interface LoginProps {
  onChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Login: React.FC<LoginProps> = ({ onChangeValue }) => {
  const errorEmailMessage = useSelector((state: RootStoreState) => state.authorization.errorEmailMessage)
  const formData = useSelector((state: RootStoreState) => state.authorization.formData)

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