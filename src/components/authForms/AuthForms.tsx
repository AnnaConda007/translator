import { useCallback } from "react";
import { Box } from "@mui/material/";
import { useDispatch, useSelector } from "react-redux";
import OpenFormButton from "./OpenFormButton";
import SignInForm from "./signIn/SignIn";
import SignUpForm from "./signUp/SignUp";
import styles from "./styles/authForm.module.css";
import { StyledButtonsConteiner, StyledButtonBox } from "./styles/authStyled";
import { resetForms } from "../../redux/authSlise";
import { RootStoreState } from "../../redux/store";
import { toggleVisibilityAuthForm } from "../../redux/visibilitySlice ";

const AuthForms = () => {
  const dispatch = useDispatch();
  const selectedform = useSelector(
    (state: RootStoreState) => state.visibility.authForm,
  );
  const signUp = {
    butonDiscovererForm: "завести аккаунт",
    formButton: "регистрация",
  };
  const signIn = {
    butonDiscovererForm: "уже есть аккаунт",
    formButton: "войти",
  };

  const handleButton = useCallback(
    (value: string) => {
      dispatch(toggleVisibilityAuthForm(value));
      if (value) dispatch(resetForms());
    },
    [dispatch],
  );

  return (
    <Box className={styles.authForm}>
      <StyledButtonsConteiner>
        <StyledButtonBox>
          <OpenFormButton
            value={signUp.butonDiscovererForm}
            handleButton={handleButton}
          />
          {selectedform === signUp.butonDiscovererForm && (
            <SignUpForm buttonValue={signUp.formButton} />
          )}
        </StyledButtonBox>
        <StyledButtonBox>
          <OpenFormButton
            value={signIn.butonDiscovererForm}
            handleButton={handleButton}
          />
          {selectedform === signIn.butonDiscovererForm && (
            <SignInForm valueButton={signIn.formButton} />
          )}
        </StyledButtonBox>
      </StyledButtonsConteiner>
    </Box>
  );
};

export default AuthForms;
