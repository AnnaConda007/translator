import { LanguageMatchTested } from "../../../../enums/dictionaryEnum";
import { IFlashCardData } from "../../../../redux/testSlice";

interface CorrectAnswerProps {
  flashCardData: Array<IFlashCardData>;
  activeCardNumber: number;
  answerValue: string;
  ruWord: LanguageMatchTested;
}

const CorrectAnswer: React.FC<CorrectAnswerProps> = ({
  flashCardData,
  activeCardNumber,
  answerValue,
  ruWord,
}) => {
  const currentWord =
    ruWord === LanguageMatchTested.RUSSIAN
      ? flashCardData[activeCardNumber].russianWord
      : flashCardData[activeCardNumber].foreignWord;
  return <>{currentWord !== answerValue && <p>{currentWord}</p>}</>;
};

export default CorrectAnswer;
