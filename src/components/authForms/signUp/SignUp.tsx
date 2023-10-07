import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import AuthenticationCodeInput from "./authenticationCode/AuthenticationCode";
import ChooseLanguage from "./ChooseLanguage";
import { useDoubleAuthentication } from "../../../hooks/autentiification/useDoubleAuthenticationr";
import { RootStoreState } from "../../../redux/store";
import AutButton from "../authButton/AuthButton";
import AuthLogin from "../authLogin/AuthLogin";
import AuthPassword from "../authPassword/AuthPassword";
const SignUpForm = () => {
  const doubleAuthentication = useDoubleAuthentication();
  const authCodeInputToggle = useSelector(
    (state: RootStoreState) => state.visibility.authCodeInput,
  );
  const onSubmit = async () => {
    await doubleAuthentication();
  };

  return (
    <Box>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <AuthLogin />
        <AuthPassword reEnterPassword={true} />
        <ChooseLanguage />
        <AutButton valueButton={"Зарегистрироваться"} />
      </form>
      {authCodeInputToggle && <AuthenticationCodeInput />}
    </Box>
  );
};

export default SignUpForm;
