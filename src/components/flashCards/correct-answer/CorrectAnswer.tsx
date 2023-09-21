import { IFlashCardData } from "../FlashCards";

interface CorrectAnswerProps {
  flashCardData: Array<IFlashCardData>;
  activeCardNumber: number;
  answerValue: string;
  ruWord: boolean;
}

const CorrectAnswer: React.FC<CorrectAnswerProps> = ({
  flashCardData,
  activeCardNumber,
  answerValue,
  ruWord,
}) => {
  const currentWord = ruWord
    ? flashCardData[activeCardNumber].russianWord
    : flashCardData[activeCardNumber].foreignWord;

  console.log("currentWord", currentWord);
  console.log("answerValue", answerValue);
  return <>{currentWord !== answerValue && <p>{currentWord}</p>}</>;
};

export default CorrectAnswer;
