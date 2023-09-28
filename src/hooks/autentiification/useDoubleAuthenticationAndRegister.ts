import { useDispatch, useSelector, batch } from 'react-redux';
import { useValidationRegistrationForm, useHandleAuthorizationError } from './useValidationRegistrationForm';
import { RootStoreState } from '../../redux/store';
import { useNavigate } from 'react-router-dom';
import { setErrorPasswordMessage, setAutentificationCode } from '../../redux/authorizationSlise';
import { registerWithEmail } from '../../utils/autentiification/firebase.utils';
import { User } from 'firebase/auth/cordova';
import { FirebaseError } from 'firebase/app';
import { RoutesApp } from '../../enums/enum';
import { sendAutentiificationCode } from '../../utils/autentiification/sendAutentiificationCode';
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
    const autentificationCode = await sendAutentiificationCode(userEmail)
    batch(() => {
      dispatch(setAutentificationCode(autentificationCode))
      dispatch(toggleAuthCodeInput(true))
    })
    console.log(autentificationCode)
  }
  return autentificate
}

export const useRegister = () => {
  const navigate = useNavigate()
  const handleAuthorizationError = useHandleAuthorizationError()
  const formData = useSelector((state: RootStoreState) => state.authorization.formData)
  const register = async () => {
    try {
      const user: User = await registerWithEmail(formData.login, formData.password);
      localStorage.setItem("userFairbaseId", user.uid)
      navigate(RoutesApp.HOME)
    } catch (error) {
      if ((error instanceof FirebaseError)) {
        handleAuthorizationError(error)
      }
    }
  }
  return register
}