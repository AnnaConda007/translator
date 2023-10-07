import { Box, IconButton } from '@mui/material';
import LogOutButton from './logOutButton/LogOutButton'
import LanguageButton from './language/language-button/LaguageButton'
import styles from "./header.module.css"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { useNavigate } from 'react-router-dom';
import { RoutesApp } from '../../enums/routesAppEnum';

const Header = () => {
  const navigate = useNavigate()
  const handleHome = () => {
    navigate(RoutesApp.HOME)
  }
  return (
    <Box className={styles.header}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <LanguageButton />
        <IconButton onClick={handleHome}>
          <HomeOutlinedIcon />
        </IconButton>
      </Box>
      <LogOutButton />
    </Box>
  )
}

export default Header