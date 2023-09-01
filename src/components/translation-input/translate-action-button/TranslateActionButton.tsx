import { Button } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import { RootStoreState } from '../../../redux/store';
import { translate } from '../../../utils/tranlslateAPI';
import { setTranslationWord, setTranslatedWord } from '../../../redux/translatedWordSlice';
  import { toggleTranslationInputVisibility } from '../../../redux/visibilitySlice ';
interface ITranslateActionButtonProps {
  value: string,
  setInputValue: (value:string) => void
}

const TranslateActionButton: React.FC<ITranslateActionButtonProps> = ({value, setInputValue}) => {
  const selectedLanguage = useSelector(
    (state: RootStoreState) => state.language
  );
const dispatch = useDispatch()


  const handleTranslate = async (valueInput: string) => {
    if (!valueInput || !selectedLanguage) return;
    const translateResult: string | null = await translate(
      selectedLanguage,
      valueInput
    );
    if (!translateResult) return;
    dispatch(setTranslationWord(valueInput));
    dispatch(setTranslatedWord(translateResult));
    dispatch(toggleTranslationInputVisibility(true));
    setInputValue("");
  };

  return (
    <Button variant="outlined" onClick={() => handleTranslate(value)}>
      перевести
    </Button>
  );
};

export default TranslateActionButton;
