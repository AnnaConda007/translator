import { Popover, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { RoutesApp } from '../../enums/routesAppEnum';

interface AuthPopove {
  anchorEl: HTMLElement | null
  setAnchorEl: (vaue: HTMLElement | null) => void
  popoverValue: string
}

const AuthPopove: React.FC<AuthPopove> = ({ anchorEl, setAnchorEl, popoverValue }) => {
  const navigate = useNavigate()
  const handleToAuthButton = () => {
    navigate(RoutesApp.AUTHORIZATION)
  }

  const closePopover = () => {
    setAnchorEl(null)
  }
  return (
    <Popover
      id="authPopover"
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={closePopover}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <Typography variant="body1" component="span" >
        <span onClick={handleToAuthButton}>Зарегистируйтесь</span> {popoverValue}
      </Typography>
    </Popover>
  )
}


export default AuthPopove