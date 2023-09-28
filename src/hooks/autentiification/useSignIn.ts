import { UserData } from '../../enums/authEnum';
import { signInWithEmail } from '../../utils/auth/firebaseConfig';
import { User } from 'firebase/auth/cordova';
import { useNavigate } from 'react-router-dom';
import { RoutesApp } from '../../enums/routesAppEnum';
import { setLanguageRecorderInDB } from '../../redux/authSlise';
import { useDispatch, useSelector } from 'react-redux';
import { useValidationAuthForm } from './useValidationAuthForm';
import { RootStoreState } from '../../redux/store';
import { useHandleAuthError } from './useHandleAuthError';
import { FirebaseError } from 'firebase/app';
import { DataBasePoints } from '../../enums/dataBasePointsEnum';

export const useSignIn = () => {
  const handleError = useHandleAuthError()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const validate = useValidationAuthForm()
  const formData = useSelector((state: RootStoreState) => state.authorization.formData)
  const signIn = async () => {
    const validation = validate()
    if (!validation) return
    try {
      const user: User = await signInWithEmail(formData.login, formData.password)
      localStorage.setItem(UserData.USER_ID, user.uid)
      navigate(RoutesApp.HOME)
      if (localStorage.getItem(DataBasePoints.LANGUAGE)) {
        dispatch(setLanguageRecorderInDB())
      }
    } catch (error) {
      if ((error instanceof FirebaseError)) {
        handleError(error)
      }
    }
  }
  return signIn
}