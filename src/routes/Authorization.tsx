import { TextField, Box, Button, Typography } from '@mui/material';
import { useState } from "react"
import { registerWithEmail } from '../utils/firebase.utils';
import { useNavigate } from 'react-router-dom';
import { routes } from '../components/enum';
const Authorization = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    login: "",
    password: ""
  })
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }
  const handleRegister = async () => {
    try {
      const user = await registerWithEmail(formData.login, formData.password);
      console.log("Пользователь успешно зарегистрирован:", user.uid);
      localStorage.setItem("userFairbaseId", user.uid)
      navigate(routes.HOME)
    } catch (error) {
      console.error("Ошибка при регистрации:", (error as Error).message);

    }
  };

  return (
    <>
      <Box>
        <Typography variant="h5" component="h2">
          Регистрация нового пользователя
        </Typography>
        <form onSubmit={e => e.preventDefault()}>  {/* Предотвращаем стандартное поведение формы */}
          <TextField
            name="login"
            autoComplete='off'
            value={formData.login}
            onChange={onChange}
            variant="outlined"
            label="Логин"
            margin="normal"
          ></TextField>
          <TextField
            name="password"
            autoComplete='off'
            value={formData.password}
            onChange={onChange}
            variant="outlined"
            label="Пароль"
            type="password"
            margin="normal"
          ></TextField>
          <Button variant='contained' onClick={handleRegister}> Зарегистрироваться</Button>
        </form>
      </Box>

    </>

  )
}


export default Authorization