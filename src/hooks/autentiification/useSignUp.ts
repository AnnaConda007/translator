
import { useSelector } from 'react-redux';
import { useCatchAuthError } from './useCatchAuthError';
import { RootStoreState } from '../../redux/store';
import { useNavigate } from 'react-router-dom';
import { SignUpWithEmail } from '../../utils/auth/firebaseConfig';
import { User } from 'firebase/auth/cordova';
import { FirebaseError } from 'firebase/app';
import { RoutesApp } from '../../enums/routesAppEnum';
import { UserData } from '../../enums/authEnum';
import { specifyLanguage } from '../../utils/updateData/specifyLanguage';
import { createFolerAtYandexDisk } from '../../utils/auth/createFolderAtYandexDisk';

export const useSignUp = () => {
  const navigate = useNavigate()
  const language: string = useSelector((state: RootStoreState) => state.language)
  const handleAuthorizationError = useCatchAuthError()
  const formData = useSelector((state: RootStoreState) => state.authorization.formData)
  return async () => {
    try {
      const user: User = await SignUpWithEmail(formData.login, formData.password);
      localStorage.setItem(UserData.USER_ID, user.uid)
      await createFolerAtYandexDisk(user.uid)
      await specifyLanguage(language)
      navigate(RoutesApp.HOME)
    } catch (error) {
      if ((error instanceof FirebaseError)) {
        handleAuthorizationError(error)
      }
    }
  }
}