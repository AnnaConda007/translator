import { useDispatch, useSelector, batch } from "react-redux";
import { useValidationAuthForm } from "./useValidationAuthForm";
import {
  setErrorPasswordMessage,
  setAutentificationCode,
} from "../../redux/authSlise";
import { RootStoreState } from "../../redux/store";
import { toggleAuthCodeInput } from "../../redux/visibilitySlice ";
import { sendDoubleAuthenticationCode } from "../../utils/auth/sendDoubleAuthenticationCode";

export const useDoubleAuthentication = () => {
  const dispatch = useDispatch();
  const validate = useValidationAuthForm();
  const formData = useSelector(
    (state: RootStoreState) => state.authorization.formData,
  );
  const userEmail = formData.login;
  return async () => {
    const validation: boolean = validate();
    if (!validation) return;
    const matchPassword = formData.password === formData.reEnterPassword;
    if (!matchPassword) {
      dispatch(setErrorPasswordMessage("Пароли не совпадают"));
      return;
    }
    const autentificationCode = await sendDoubleAuthenticationCode(userEmail);
    batch(() => {
      dispatch(setAutentificationCode(autentificationCode));
      dispatch(toggleAuthCodeInput(true));
    });
  };
};

export const repeatCodeAuthentication = () => {
  const dispatch = useDispatch();
  const formData = useSelector(
    (state: RootStoreState) => state.authorization.formData,
  );
  const userEmail = formData.login;
  return async () => {
    const autentificationCode = await sendDoubleAuthenticationCode(userEmail);
    dispatch(setAutentificationCode(autentificationCode));
  };
};
