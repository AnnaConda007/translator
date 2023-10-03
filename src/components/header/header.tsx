import { Box } from '@mui/material';
import LogOutButton from './logOutButton/LogOutButton'
import SelectedLanguage from '../language-info/selected-language/SelectedLaguage'
import styles from "./header.module.css"
const Header = () => {

  return (
    <Box className={styles.header}>
      <SelectedLanguage />
      <LogOutButton />
    </Box>
  )
}

export default Header