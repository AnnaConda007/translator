import { useSignIn } from "../../../hooks/autentiification/useSignIn";
import AutButton from "../authButton/AuthButton";
import AuthLogin from "../authLogin/AuthLogin";
import AuthPassword from "../authPassword/AuthPassword";
import { StyledFormBox } from "../authStyled";
import CloseFormButton from "../closeFormButton";

interface SignInFormProps {
  valueButton: string;
}
const SignInForm: React.FC<SignInFormProps> = ({ valueButton }) => {
  const signIn = useSignIn();

  const onSubmit = async () => {
    signIn();
  };

  return (
    <StyledFormBox>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <CloseFormButton />
        <AuthLogin />
        <AuthPassword reEnterPassword={false} />
        <AutButton valueButton={valueButton} />
      </form>
    </StyledFormBox>
  );
};

export default SignInForm;
