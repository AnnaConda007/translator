import { Box } from '@mui/material';
import LogOutButton from './logOutButton/LogOutButton'
import LanguageButton from './language/language-button/LaguageButton'
import styles from "./header.module.css"
const Header = () => {

  return (
    <Box className={styles.header}>
      <LanguageButton />
      <LogOutButton />
    </Box>
  )
}

export default Header