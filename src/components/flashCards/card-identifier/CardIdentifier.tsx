import { useSelector } from "react-redux";
import { RootStoreState } from "../../../redux/store";
import EnteredMatchRu from "../entered-match-ru/EnteredMatchRu";
import AnswerOptions from "../tests-answer-options/AnswerOptions";
import { IFlashCardData } from '../../../redux/testSlice';
import { counterForTest, counterForEnteredMatchRu, counterForEnteredMatchForeign } from '../../../contains';
interface CardIdentifierProp {
  activeCardNumber: number;
  currentCards:Array<IFlashCardData>
}
const CardIdentifier: React.FC<CardIdentifierProp> = ({ activeCardNumber, currentCards }) => {
 

 


  const counters = useSelector(
    (state: RootStoreState) => state.dictionary.counters
  );
  const currentWord = currentCards[activeCardNumber]?.foreignWord;
  const currentCount = counters[currentWord];
  return (
    <>
      {currentCount !== undefined &&
      currentCount !== undefined &&
      currentCount >= counterForEnteredMatchRu ? (
        <EnteredMatchRu flashCardData={currentCards} />
      ) : (
        <AnswerOptions flashCardData={currentCards} />
      )}
    </>
  );
};

export default CardIdentifier;
