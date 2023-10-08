import { useSelector } from "react-redux";
import AuthenticationCodeInput from "./authenticationCode/AuthenticationCode";
import ChooseLanguage from "./ChooseLanguage";
import { useDoubleAuthentication } from "../../../hooks/autentiification/useDoubleAuthenticationr";
import { RootStoreState } from "../../../redux/store";
import AutButton from "../authButton/AuthButton";
import AuthLogin from "../authLogin/AuthLogin";
import AuthPassword from "../authPassword/AuthPassword";
import { StyledFormBox } from '../styles/authStyled'; 
import CloseFormButton from '../closeFormButton';

interface SignUpFormProps{
  buttonValue:string
}
const SignUpForm :React.FC<SignUpFormProps> = ({buttonValue}) => {
  const doubleAuthentication = useDoubleAuthentication();
  const authCodeInputToggle = useSelector(
    (state: RootStoreState) => state.visibility.authCodeInput,
  );
 

  const onSubmit = async () => {
    await doubleAuthentication(); 
  };

  return (
    <StyledFormBox>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <CloseFormButton/>
        <AuthLogin />
        <AuthPassword reEnterPassword={true} />
        <ChooseLanguage />
        {   <AutButton valueButton={buttonValue} />}
  
      </form>
      {authCodeInputToggle && <AuthenticationCodeInput />}
    </StyledFormBox>
  );
};

export default SignUpForm;
