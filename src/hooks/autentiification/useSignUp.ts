
import { useSelector } from 'react-redux';
import { useHandleAuthError } from './useHandleAuthError';
import { RootStoreState } from '../../redux/store';
import { useNavigate } from 'react-router-dom';
import { SignUpWithEmail } from '../../utils/auth/firebaseConfig';
import { User } from 'firebase/auth/cordova';
import { FirebaseError } from 'firebase/app';
import { RoutesApp } from '../../enums/routesAppEnum';
import { UserData } from '../../enums/authEnum';
import { setAuthType } from '../../redux/authSlise';
import { useDispatch } from 'react-redux';
import { AuthType } from '../../enums/authEnum';
import { specifyLanguage } from '../../utils/updateDB/specifyLanguage';

export const useSignUp = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleAuthorizationError = useHandleAuthError()
  const formData = useSelector((state: RootStoreState) => state.authorization.formData)
  return async () => {
    try {
      const user: User = await SignUpWithEmail(formData.login, formData.password);
      localStorage.setItem(UserData.USER_ID, user.uid)
      await specifyLanguage("")
      navigate(RoutesApp.HOME)
      dispatch(setAuthType(AuthType.SIGN_UP))
    } catch (error) {
      if ((error instanceof FirebaseError)) {
        handleAuthorizationError(error)
      }
    }
  }
}