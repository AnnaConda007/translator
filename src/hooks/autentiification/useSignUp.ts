
import { useSelector } from 'react-redux';
import { useHandleAuthError } from './useHandleAuthError';
import { RootStoreState } from '../../redux/store';
import { useNavigate } from 'react-router-dom';
import { SignUpWithEmail } from '../../utils/auth/firebaseConfig';
import { User } from 'firebase/auth/cordova';
import { FirebaseError } from 'firebase/app';
import { RoutesApp } from '../../enums/routesAppEnum';
import { UserData } from '../../enums/authEnum';

export const useSignUp = () => {
  const navigate = useNavigate()
  const handleAuthorizationError = useHandleAuthError()
  const formData = useSelector((state: RootStoreState) => state.authorization.formData)
  const register = async () => {
    try {
      const user: User = await SignUpWithEmail(formData.login, formData.password);
      localStorage.setItem(UserData.USER_ID, user.uid)
      navigate(RoutesApp.HOME)
    } catch (error) {
      if ((error instanceof FirebaseError)) {
        handleAuthorizationError(error)
      }
    }
  }
  return register
}