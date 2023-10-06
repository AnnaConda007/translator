import { StyledWrapBox } from './Styled';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { ReactNode } from 'react';
import { toggleVisibilityMenuItem } from '../../redux/visibilitySlice ';
import { useDispatch } from 'react-redux';

interface BackingProps {
  children: ReactNode;
}

const Backing: React.FC<BackingProps> = ({ children }) => {
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(toggleVisibilityMenuItem(""))
  }
  return (
    <>
      <StyledWrapBox>
        <Button onClick={handleClose} sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
          <CloseIcon />
        </Button>
        {children}
      </StyledWrapBox>
    </>
  )
}

export default Backing;