import { IconButton } from '@mui/material';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import { toggleAddNewBookInput } from '../../../redux/visibilitySlice ';
import { useDispatch } from 'react-redux';
import { useState } from "react"
import AuthPopove from '../../authPopover/AuthPopover';
import { UserData } from '../../../enums/authEnum';

const ReplenishLibraryButton = () => {
  const userIsRegistered = localStorage.getItem(UserData.USER_ID)
  const [OpenAuthPopover, setOpenAuthPopover] = useState<HTMLElement | null>(null);
  const [clickedButton, setClickedButton] = useState(true)
  const dispatch = useDispatch()

  const handleButton = (currentTarget: HTMLElement | null) => {
    if (!userIsRegistered) {
      setOpenAuthPopover(currentTarget);
      return
    }
    dispatch(toggleAddNewBookInput(clickedButton))
    setClickedButton(!clickedButton)
  }

  return (
    <>
      <IconButton color="primary" onClick={(e) => handleButton(e.currentTarget)}>  <LibraryAddIcon />
      </IconButton>
      <AuthPopove anchorEl={OpenAuthPopover} setAnchorEl={setOpenAuthPopover} popoverValue={"что бы добавить свои книги"} />
    </>

  )
}


export default ReplenishLibraryButton


