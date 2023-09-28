
import { useSelector } from 'react-redux';
import { useHandleAuthorizationError } from './useValidationRegistrationForm'; 
import { RootStoreState } from '../../redux/store';
import { useNavigate } from 'react-router-dom';
import { SignUpWithEmail } from '../../utils/autentiification/firebaseConfig';
import { User } from 'firebase/auth/cordova';
import { FirebaseError } from 'firebase/app';
import { RoutesApp } from '../../enums/routesAppEnum';

export const useSignUp = () => {
  const navigate = useNavigate()
  const handleAuthorizationError = useHandleAuthorizationError()
  const formData = useSelector((state: RootStoreState) => state.authorization.formData)
  const register = async () => {
    try {
      const user: User = await SignUpWithEmail(formData.login, formData.password);
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