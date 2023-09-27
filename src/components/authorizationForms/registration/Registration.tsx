import { Button, Typography, Box } from '@mui/material';
import { useState } from "react"
import { registerWithEmail } from '../../../utils/firebase.utils';
import { useNavigate } from 'react-router-dom';
import { RoutesApp } from '../../../enums/enum';
import { validationRegistrationForm } from '../../../utils/validationAuthorizationForms/validationRegistrationForms';
import { handleAuthorizationError } from '../../../utils/validationAuthorizationForms/validationRegistrationForms';
import { User } from 'firebase/auth/cordova';
import { FirebaseError } from 'firebase/app';
import Login from './login/Login';
import Password from './password/Password';
export interface formData {
  login: string,
  password: string,
  reEnterPassword: string
}

const Registration = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState<formData>({
    login: "",
    password: "",
    reEnterPassword: ""
  })
  const [errorEmailMessage, setErrorEmailMessage] = useState("")
  const [errorPasswordMessage, setErrorPasswordMessage] = useState("")
  const [otherError, setOtherError] = useState("")

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
    setErrorEmailMessage("")
    setErrorPasswordMessage("")
  }

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

  return (
    <>
      <Typography variant="h5" component="h2">
        Регистрация нового пользователя
      </Typography>
      <form onSubmit={e => {
        e.preventDefault();
        handleButtonRegistration();
      }}>
        <Login formData={formData} errorEmailMessage={errorEmailMessage} onChangeValue={onChangeValue} />
        <Password formData={formData} errorPasswordMessage={errorPasswordMessage} onChangeValue={onChangeValue} />
        <Box>
          <Typography variant="body2" component="p">
            {otherError}          </Typography>
          <Button type="submit" variant='contained' > Зарегистрироваться</Button>

        </Box>
      </form></>
  )


}

export default Registration