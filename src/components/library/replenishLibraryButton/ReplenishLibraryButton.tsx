import { Button } from "@mui/material";
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
      <Button onClick={handleButton}>  <LibraryAddIcon />
      </Button>
    </>

  )
}


export default ReplenishLibraryButton