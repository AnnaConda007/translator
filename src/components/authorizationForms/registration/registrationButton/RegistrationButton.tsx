import { validationRegistrationForm } from '../../../../utils/autentiification/validationRegistrationForms';

const RegistrationButton = ({})=>{



  const handleButtonRegistration = async () => {
    const validation: boolean = validationRegistrationForm({ setErrorEmailMessage, setErrorPasswordMessage, formData })
    const matchPassword = formData.password === formData.reEnterPassword
    if (!matchPassword) {
      setErrorPasswordMessage("Пароли не совпадают")
      return
    }

    if (!validation) return
    try {
      const user: User = await registerWithEmail(formData.login, formData.password);
      localStorage.setItem("userFairbaseId", user.uid)
      navigate(RoutesApp.HOME)
    } catch (error) {
      if ((error instanceof FirebaseError)) {
        handleAuthorizationError({ setErrorEmailMessage, setErrorPasswordMessage, setOtherError, error })
      }
    }
  };
}