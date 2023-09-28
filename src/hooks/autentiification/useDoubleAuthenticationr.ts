import { useDispatch, useSelector, batch } from 'react-redux';
import { useValidationSignUpForm } from './useValidationRegistrationForm';
import { RootStoreState } from '../../redux/store';
import { setErrorPasswordMessage, setAutentificationCode } from '../../redux/authorizationSlise';
import { sendDoubleAuthenticationCode } from '../../utils/autentiification/sendDoubleAuthenticationCode';
import { toggleAuthCodeInput } from '../../redux/visibilitySlice ';

export const useDoubleAuthentication = () => {
  const dispatch = useDispatch()
  const validate = useValidationSignUpForm()
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

