import { batch } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setErrorEmailMessage, setErrorPasswordMessage, setFormData } from '../../redux/authorizationSlise';
import { IformData } from '../../redux/authorizationSlise';

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

