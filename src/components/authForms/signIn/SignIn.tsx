import { Box } from "@mui/material";
import { useSignIn } from "../../../hooks/autentiification/useSignIn";
import AutButton from "../authButton/AuthButton";
import AuthLogin from "../authLogin/AuthLogin";
import AuthPassword from "../authPassword/AuthPassword";

const SignInForm = () => {
  const signIn = useSignIn();
  const onSubmit = async () => {
    signIn();
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
        <AuthPassword reEnterPassword={false} />
        <AutButton valueButton={"войти"} />
      </form>
    </Box>
  );
};

export default SignInForm;
