import { Popover, Typography, Button } from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import { clearDictionaryAndspecifyLanguage } from '../../../utils/updateData/clearDictionaryAndUpdateLanguage';
import { setActiveLanguageBox } from '../../../redux/languageUpdateSlice';
import { clearDictionary } from '../../../redux/dictionarySlice';
import { RootStoreState } from '../../../redux/store';
import { useCallback } from 'react';
import { setLanguageCode } from '../../../redux/languageUpdateSlice';
import { toggleVisibilityMenuItem } from '../../../redux/visibilitySlice ';
import { setLanguage } from '../../../redux/languageSlice';
import { specifyLanguage } from '../../../utils/updateData/specifyLanguage';
import { DataBasePoints } from '../../../enums/dataBasePointsEnum';

interface LanguagePopoverProps {
  anchorEl: null | HTMLElement
  setAnchorEl: (value: null | HTMLElement) => void
}

const LanguagePopover: React.FC<LanguagePopoverProps> = ({ anchorEl, setAnchorEl }) => {
  const dispatch = useDispatch()
  const languageCode = useSelector((state: RootStoreState) => state.languageBox.languageCode)

  const selectLanguage = useCallback(async (languageCode: string) => {
    dispatch(setLanguageCode(languageCode))
    localStorage.setItem(DataBasePoints.LANGUAGE, languageCode);
    dispatch(setLanguage(languageCode));
    await specifyLanguage(languageCode);
    dispatch(toggleVisibilityMenuItem(""));
  }, []);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCancellation = () => {
    dispatch(setActiveLanguageBox(false))
  }
  const handleContinue = async () => {
    await clearDictionaryAndspecifyLanguage(languageCode)
    dispatch(clearDictionary())
    dispatch(setActiveLanguageBox(false))
    selectLanguage(languageCode)
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