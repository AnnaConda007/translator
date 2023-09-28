
import { TextField, Typography, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootStoreState } from '../../../../redux/store';
import { useChangeValueForm } from '../../../../hooks/autentiification/useChangeValueForm'; 

const RegistrationLogin: React.FC = ( ) => {
  const onChangeValue = useChangeValueForm()
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

export default RegistrationLogin