import { FirebaseError } from 'firebase/app';
import { EmailError, PasswordError } from '../../enums/authorizationEnum';
import { formData } from '../../components/authorizationForms/registration/Registration';

interface validationRegistratioFormArg {
  setErrorEmailMessage: (value: string) => void,
  setErrorPasswordMessage: (value: string) => void
  formData: formData
}

interface handleAuthorizationErrorArg {
  setErrorEmailMessage: (value: string) => void,
  setErrorPasswordMessage: (value: string) => void
  setOtherError: (value: string) => void
  error: FirebaseError
}

const invalidEmailMessage = "Неверный формат. Убедитесь, что ваша почта соответствует формату example@example.ru"
const alreadyUseMessage = "Пользователь с такой почтой уже зарегистрирован"
const weakPasswordMessage = "Ненадежный или слишком короткий пароль, пароль должен содержать не менее 6 символов"
const unforeseenErrorMessage = "Непредвиденная ошибка, попробуйте еще раз"
const maxLengthPassword = 128
const minLengthPassword = 6
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

export const validationRegistrationForm = ({ setErrorEmailMessage, setErrorPasswordMessage, formData }
  : validationRegistratioFormArg): boolean => {
  if (!emailPattern.test(formData.login) || !formData.login) {
    setErrorEmailMessage(invalidEmailMessage);
    return false
  } else if (!formData.password) {
    setErrorPasswordMessage("Пароль не введен");
    return false
  } else if (formData.password.length < minLengthPassword) {
    setErrorPasswordMessage(weakPasswordMessage);
    return false
  } else if (formData.password.length > maxLengthPassword) {
    setErrorPasswordMessage("Слишком длинный пароль");
    return false
  } else {
    return true
  }
}


export const handleAuthorizationError = ({ setErrorEmailMessage, setErrorPasswordMessage, setOtherError, error }: handleAuthorizationErrorArg) => {
  switch (error.message) {
    case EmailError.ALREADY_IN_USE:
      setErrorEmailMessage(alreadyUseMessage);
      break;
    case EmailError.INVALID_EMAIL:
      setErrorEmailMessage(invalidEmailMessage);
      break;
    case PasswordError.WEAK_PASSWORD:
      setErrorPasswordMessage(weakPasswordMessage);
      break;
    default:
      setOtherError(unforeseenErrorMessage);
      break;
  }
}

