import { IFlashCardData } from "../../../redux/testSlice";
import { languageMatchTested } from "../../../enums/enum";
interface CorrectAnswerProps {
  flashCardData: Array<IFlashCardData>;
  activeCardNumber: number;
  answerValue: string;
  ruWord: languageMatchTested;
}

const CorrectAnswer: React.FC<CorrectAnswerProps> = ({
  flashCardData,
  activeCardNumber,
  answerValue,
  ruWord,
}) => {
  const currentWord =
    ruWord === languageMatchTested.RUSSIAN
      ? flashCardData[activeCardNumber].russianWord
      : flashCardData[activeCardNumber].foreignWord;
  return <>{currentWord !== answerValue && <p>{currentWord}</p>}</>;
};

export default CorrectAnswer;
