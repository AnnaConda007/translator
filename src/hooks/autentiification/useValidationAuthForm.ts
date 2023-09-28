import { FirebaseError } from 'firebase/app';
import { EmailError, PasswordError, signInErrorMessage } from '../../enums/authEnum';
import { useSelector } from 'react-redux';
import { setErrorEmailMessage, setErrorPasswordMessage } from '../../redux/authSlise';
import { RootStoreState } from '../../redux/store';
import { useDispatch } from 'react-redux';


const invalidEmailMessage = "Неверный формат. Убедитесь, что ваша почта соответствует формату example@example.ru"
const weakPasswordMessage = "Ненадежный или слишком короткий пароль, пароль должен содержать не менее 6 символов"
const maxLengthPassword = 128
const minLengthPassword = 6
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

export const useValidationAuthForm = () => {
  const dispatch = useDispatch()
  const formData = useSelector((state: RootStoreState) => state.authorization.formData)
  const validate = (): boolean => {
    if (!emailPattern.test(formData.login) || !formData.login) {
      dispatch(setErrorEmailMessage(invalidEmailMessage));
      return false
    } else if (!formData.password) {
      dispatch(setErrorPasswordMessage("Пароль не введен"));
      return false
    } else if (formData.password.length < minLengthPassword) {
      dispatch(setErrorPasswordMessage(weakPasswordMessage));
      return false
    } else if (formData.password.length > maxLengthPassword) {
      dispatch(setErrorPasswordMessage("Слишком длинный пароль"));
      return false
    } else {
      return true
    }
  }
  return validate
}


