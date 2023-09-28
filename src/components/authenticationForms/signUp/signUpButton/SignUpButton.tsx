

import { Button, Typography, Box } from '@mui/material';
import { RootStoreState } from '../../../../redux/store';
import { useSelector } from 'react-redux';

const SignUpButton: React.FC = () => {
  const otherErrorMessage = useSelector((state: RootStoreState) => state.authorization.otherError)


  return (
    <Box>
      <Typography variant="body2" component="p">
        {otherErrorMessage}          </Typography>
      <Button type="submit" variant='contained'   > Зарегистрироваться</Button>

    </Box>
  )
}
export default SignUpButton