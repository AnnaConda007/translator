import { IconButton , Box} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch , batch} from 'react-redux'
import { toggleVisibilityMenuOpen, toggleVisibilityMenuItem } from '../../../redux/visibilitySlice ';  
import { useScreenSize } from '../../../hooks/useScreenSize';


const CloaeContentButton = ()=>{  
  const isMobile = useScreenSize() 
const dispath = useDispatch()
const handleButton = ()=>{
  batch(()=>{
    dispath(toggleVisibilityMenuOpen(true));
    dispath(toggleVisibilityMenuItem(""));
  })
}



return (
  <>
    {!isMobile && (
    <Box sx={{display:"flex", justifyContent:"flex-end"}}>
      <IconButton onClick={handleButton}>
        <CloseIcon/>
      </IconButton>
    </Box>
  )}</>

);


}

export default CloaeContentButton