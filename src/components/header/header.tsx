import { useSelector } from 'react-redux'
import { RootStoreState } from '../../redux/store'
import { Typography } from '@mui/material'
import LogOutButton from './logOutButton/LogOutButton'

const Header = () => {
  const language = useSelector((state: RootStoreState) => state.language)

  return (
    <>
      <Typography variant="body2" component="p">
        {language}          </Typography>
      <LogOutButton />
    </>
  )
}

export default Header