import { Button } from '@mui/material';

type AutButtonProps = {
  valueButton: string;
}
const AutButton: React.FC<AutButtonProps> = ({ valueButton }) => {

  return (
    <Button type="submit" variant='contained'   > {valueButton}</Button>

  )
}
export default AutButton