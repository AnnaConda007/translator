import { updateDictionaryToBD } from '../../../utils/updateDictionaryToBD';
import { updateDictionaryToLS } from '../../../utils/updateDictionaryToLS';
import { TypeAction } from '../enum';
import { useDispatch } from 'react-redux';
import {  useSelector } from 'react-redux/es/hooks/useSelector';
import Button from "@mui/material/Button/Button";
import LibraryAddRoundedIcon from "@mui/icons-material/LibraryAddRounded";
import { RootStoreState } from '../../../redux/store';
import { addWord } from '../../../redux/dictionarySlice';

const ButtonAddToAddDtionary: React.FC = () => {
const dispatch= useDispatch()
const translationWord:string = useSelector((state:RootStoreState)=> state.translator.translationWord)
const translatedWord:string = useSelector((state:RootStoreState)=> state.translator.translatedWord)


  const handleButtonAddInDictionary = async () => {
    await updateDictionaryToBD(
      { [translationWord]: translatedWord },
      TypeAction.ADD
    );
    updateDictionaryToLS({ [translationWord]: translatedWord }, TypeAction.ADD);
    dispatch(addWord({ [translationWord]: translatedWord }));
  };

  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<LibraryAddRoundedIcon />}
      onClick={handleButtonAddInDictionary}
    ></Button>
  );
};

export default ButtonAddToAddDtionary;
