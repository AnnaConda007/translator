import { Button, Typography, Box } from '@mui/material';
import { useState } from "react"
import { registerWithEmail } from '../../../utils/autentiification/firebase.utils';
import { useNavigate } from 'react-router-dom';
import { RoutesApp } from '../../../enums/enum';
import { validationRegistrationForm } from '../../../utils/autentiification/validationRegistrationForms';
import { handleAuthorizationError } from '../../../utils/autentiification/validationRegistrationForms';
import { User } from 'firebase/auth/cordova';
import { FirebaseError } from 'firebase/app';
import Login from './login/Login';
import Password from './password/Password';
import { sendAutentiificationCode } from '../../../utils/autentiification/sendAutentiificationCode';
import { useDispatch, useSelector } from 'react-redux';
import { RootStoreState } from '../../../redux/store';
import { setErrorEmailMessage, setErrorPasswordMessage, setOtherError, setFormData } from '../../../redux/authorizationSlise';
import { IformData } from '../../../redux/authorizationSlise';
import { batch } from 'react-redux';
import { useValidationRegistrationForm, useHandleAuthorizationError } from '../../../hooks/validationRegistratioForm';
export interface formData {
  login: string,
  password: string,
  reEnterPassword: string
}

const Registration = () => {
  const dispatch = useDispatch()
  const validate = useValidationRegistrationForm()
  const handleAuthorizationError = useHandleAuthorizationError()
  const otherError = useSelector((state: RootStoreState) => state.authorization.otherError)
  const formData = useSelector((state: RootStoreState) => state.authorization.formData)
  const navigate = useNavigate()


  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    batch(() => {
      dispatch(setFormData({ name: name as keyof IformData, value }));
      dispatch(setErrorEmailMessage(""))
      dispatch(setErrorPasswordMessage("")
      )
    })

  }

  const handleButtonRegistration = async () => {
    const validation: boolean = validate()
    const matchPassword = formData.password === formData.reEnterPassword
    if (!matchPassword) {
      dispatch(setErrorPasswordMessage("Пароли не совпадают"))
      return
    }
    if (!validation) return
    try {
      const user: User = await registerWithEmail(formData.login, formData.password);
      localStorage.setItem("userFairbaseId", user.uid)
      navigate(RoutesApp.HOME)
    } catch (error) {
      if ((error instanceof FirebaseError)) {
        handleAuthorizationError(error)
      }
    }
  };




  const autentificationCode = sendAutentiificationCode("p3211@yandex.ru")



  return (
    <>
      <Typography variant="h5" component="h2">
        Регистрация нового пользователя
      </Typography>
      <form onSubmit={e => {
        e.preventDefault();
        handleButtonRegistration();
      }}>
        <Login onChangeValue={onChangeValue} />
        <Password onChangeValue={onChangeValue} />
        <Box>
          <Typography variant="body2" component="p">
            {otherError}          </Typography>
          <Button type="submit" variant='contained' > Зарегистрироваться</Button>

        </Box>
      </form></>
  )


}

export default Registration