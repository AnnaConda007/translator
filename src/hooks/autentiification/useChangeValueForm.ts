import { batch } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setErrorEmailMessage, setErrorPasswordMessage, setFormData } from '../../redux/authSlise';
import { IformData } from '../../redux/authSlise';

export const useChangeValueForm = () => {
  const dispatch = useDispatch()
  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    batch(() => {
      dispatch(setFormData({ name: name as keyof IformData, value }));
      dispatch(setErrorEmailMessage(""))
      dispatch(setErrorPasswordMessage("")
      )
    })
  }
  return onChangeValue
}

