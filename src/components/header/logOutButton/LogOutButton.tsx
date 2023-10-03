import { resetActiveCardNumber, resetTest } from '../../../redux/testSlice'
import { resetDictionary } from '../../../redux/dictionarySlice'
import { resetLanguage } from '../../../redux/languageSlice'
import { resetVisibility } from '../../../redux/visibilitySlice '
import { resetTranslator } from '../../../redux/translatorSlice'
import { Button } from '@mui/material'
import { useDispatch, batch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RoutesApp } from '../../../enums/routesAppEnum'
import styles from "./logOutButton.module.css"


const LogOutButton = () => {
  const dispanch = useDispatch()
  const navigate = useNavigate()
  const handleButton = () => {
    batch(() => {
      dispanch(resetActiveCardNumber())
      dispanch(resetDictionary())
      dispanch(resetLanguage())
      dispanch(resetTest())
      dispanch(resetVisibility())
      dispanch(resetTranslator())
    })
    navigate(RoutesApp.AUTHORIZATION)
    localStorage.clear();
  }
  return (
    <Button className={styles.logOutButtonClicked} variant="contained" onClick={handleButton}>
      выйти
    </Button>
  )
}

export default LogOutButton