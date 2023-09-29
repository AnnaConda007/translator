import { Popover, Typography, Button } from "@mui/material";
import { useDispatch } from 'react-redux';
import { toggleVisibilityMenuItem } from '../../../redux/visibilitySlice ';
import { clearDictionaryAndspecifyLanguage } from '../../../utils/updateDB/clearDictionaryAndUpdateLanguage';
import { clearDictionary } from '../../../redux/dictionarySlice';
interface LanguagePopoverProps {
  anchorEl: null | HTMLElement
  setAnchorEl: (value: null | HTMLElement) => void
  selectLanguage: (value: string) => void
  pickedLanguage: string
}

const LanguagePopover: React.FC<LanguagePopoverProps> = ({ anchorEl, setAnchorEl, selectLanguage, pickedLanguage }) => {
  const dispatch = useDispatch()
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCancellation = () => {
    dispatch(toggleVisibilityMenuItem(""))
  }
  const handleContinue = async () => {
    await clearDictionaryAndspecifyLanguage(pickedLanguage)
    dispatch(clearDictionary())
    selectLanguage(pickedLanguage)
  }


  return (
    <Popover
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <Typography variant="body2" component="p">
        Внимание! Смена изучаемого языка приведёт к очистке вашего словаря.
      </Typography>
      <Button variant="contained" onClick={handleContinue} >прододжить</Button>
      <Button variant="contained" onClick={handleCancellation}>отменить</Button>
    </Popover>
  )
}

export default LanguagePopover