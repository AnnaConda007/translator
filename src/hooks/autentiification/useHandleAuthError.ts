import { FirebaseError } from 'firebase/app';
import { EmailError, PasswordError, signInErrorMessage } from '../../enums/authEnum';
import { setErrorEmailMessage, setErrorPasswordMessage } from '../../redux/authSlise';
import { useDispatch } from 'react-redux';


const invalidEmailMessage = "Неверный формат. Убедитесь, что ваша почта соответствует формату example@example.ru"
const alreadyUseMessage = "Пользователь с такой почтой уже зарегистрирован"
const weakPasswordMessage = "Ненадежный или слишком короткий пароль, пароль должен содержать не менее 6 символов"
const unforeseenErrorMessage = "Непредвиденная ошибка, попробуйте еще раз"
const invalidLoginOrPasswordErrorMessage = "Неверный логин или пароль"
const toManyAttemptErrorMessage = "Слишком много попыток, попробуйте позже"

export const useHandleAuthError = () => {
  const dispatch = useDispatch()
  const handle = (error: FirebaseError) => {
    switch (error.message) {
      case EmailError.ALREADY_IN_USE:
        dispatch(setErrorEmailMessage(alreadyUseMessage));
        break;
      case EmailError.INVALID_EMAIL:
        dispatch(setErrorEmailMessage(invalidEmailMessage));
        break;
      case PasswordError.WEAK_PASSWORD:
        dispatch(setErrorPasswordMessage(weakPasswordMessage));
        break;
      case signInErrorMessage.INVALID_LOGIN_PASSWORD:
        dispatch(setErrorPasswordMessage(invalidLoginOrPasswordErrorMessage));
        break;
      case signInErrorMessage.TO_MANY_ATTEMPT:
        dispatch(setErrorPasswordMessage(toManyAttemptErrorMessage));
        break;
      default:
        dispatch(setErrorPasswordMessage(unforeseenErrorMessage));
        break;
    }
  }
  return handle
}

