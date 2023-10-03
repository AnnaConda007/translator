import { IconButton } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useHandleTranslate } from '../../../hooks/autentiification/useHandleTranslate';

interface ITranslateActionButtonProps {
  value: string,
  setInputValue: (value: string) => void
}

const TranslateActionButton: React.FC<ITranslateActionButtonProps> = ({ value, setInputValue }) => {
  const translate = useHandleTranslate()

  const handleTranslate = async (valueInput: string) => {
    if (!valueInput) return;
    await translate(valueInput)
    setInputValue("");
  };

  return (
    <IconButton color="primary" onClick={() => handleTranslate(value)} >
      <ArrowForwardIosIcon />
    </IconButton >
  );
};

export default TranslateActionButton;
