import { useDispatch, useSelector, batch } from 'react-redux';
import { useValidationRegistrationForm } from './useValidationRegistrationForm';
import { RootStoreState } from '../../redux/store';
import { setErrorPasswordMessage, setAutentificationCode } from '../../redux/authorizationSlise';
import { sendDoubleAuthenticationCode } from '../../utils/autentiification/sendDoubleAuthenticationCode';
import { toggleAuthCodeInput } from '../../redux/visibilitySlice ';

export const useDoubleAuthenticationBeforeRegistraton = () => {
  const dispatch = useDispatch()
  const validate = useValidationRegistrationForm()
  const formData = useSelector((state: RootStoreState) => state.authorization.formData)
  const userEmail = formData.login
  const autentificate = async () => {
    const validation: boolean = validate()
    if (!validation) return
    const matchPassword = formData.password === formData.reEnterPassword
    if (!matchPassword) {
      dispatch(setErrorPasswordMessage("Пароли не совпадают"))
      return
    }
    const autentificationCode = await sendDoubleAuthenticationCode(userEmail)
    batch(() => {
      dispatch(setAutentificationCode(autentificationCode))
      dispatch(toggleAuthCodeInput(true))
    })
    console.log(autentificationCode)
  }
  return autentificate
}

