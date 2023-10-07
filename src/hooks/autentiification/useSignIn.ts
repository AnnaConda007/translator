import { FirebaseError } from "firebase/app";
import { User } from "firebase/auth/cordova";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCatchAuthError } from "./useCatchAuthError";
import { useValidationAuthForm } from "./useValidationAuthForm";
import { UserData } from "../../enums/authEnum";
import { RoutesApp } from "../../enums/routesAppEnum";
import { RootStoreState } from "../../redux/store";
import { signInWithEmail } from "../../utils/auth/firebaseConfig";

export const useSignIn = () => {
  const handleError = useCatchAuthError();
  const navigate = useNavigate();
  const validate = useValidationAuthForm();
  const formData = useSelector(
    (state: RootStoreState) => state.authorization.formData,
  );
  return async () => {
    const validation = validate();
    if (!validation) return;
    try {
      const user: User = await signInWithEmail(
        formData.login,
        formData.password,
      );
      localStorage.setItem(UserData.USER_ID, user.uid);
      navigate(RoutesApp.HOME);
    } catch (error) {
      if (error instanceof FirebaseError) {
        handleError(error);
      }
    }
  };
};
