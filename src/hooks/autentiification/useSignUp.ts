import { FirebaseError } from "firebase/app";
import { User } from "firebase/auth/cordova";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCatchAuthError } from "./useCatchAuthError";
import { UserData } from "../../enums/authEnum";
import { RoutesApp } from "../../enums/routesAppEnum";
import { RootStoreState } from "../../redux/store";
import { createFolerAtYandexDisk } from "../../utils/auth/createFolderAtYandexDisk";
import { SignUpWithEmail } from "../../utils/auth/firebaseConfig";
import { specifyLanguage } from "../../utils/updateData/specifyLanguage";

export const useSignUp = () => {
  const navigate = useNavigate();
  const language: string = useSelector(
    (state: RootStoreState) => state.language,
  );
  const handleAuthorizationError = useCatchAuthError();
  const formData = useSelector(
    (state: RootStoreState) => state.authorization.formData,
  );
  return async () => {
    try {
      const user: User = await SignUpWithEmail(
        formData.login,
        formData.password,
      );
      localStorage.setItem(UserData.USER_ID, user.uid);
      await createFolerAtYandexDisk(user.uid);
      await specifyLanguage(language);
      navigate(RoutesApp.HOME);
    } catch (error) {
      if (error instanceof FirebaseError) {
        handleAuthorizationError(error);
      }
    }
  };
};
