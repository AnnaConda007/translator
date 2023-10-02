import IconButton from '@mui/material/IconButton';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import { toggleAddNewBookInput } from '../../../redux/visibilitySlice ';
import { useDispatch } from 'react-redux';
import { useState } from "react"


const ReplenishLibraryButton = () => {
  const [clickedButton, setClickedButton] = useState(true)
  const dispatch = useDispatch()
  const handleButton = () => {
    dispatch(toggleAddNewBookInput(clickedButton))
    setClickedButton(!clickedButton)
  }

  return (
    <>
      <IconButton color="primary" onClick={handleButton}>  <LibraryAddIcon />
      </IconButton>
    </>

  )
}


export default ReplenishLibraryButton