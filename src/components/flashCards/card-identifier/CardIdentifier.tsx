import { useSelector } from "react-redux";
import EnteredMatch from "../entered-match/EnteredMatch";
import AnswerOptions from "../tests-answer-options/AnswerOptions";
import { IFlashCardData } from "../../../redux/testSlice";
import { RootStoreState } from "../../../redux/store";
import {
  stepToChangeTestType
} from "../../../contains";
import { languageMatchTested } from "../../../enums/enum";
interface CardIdentifierProp {
  activeCardNumber: number;
  currentCards: Array<IFlashCardData>;
}
const CardIdentifier: React.FC<CardIdentifierProp> = ({
  activeCardNumber,
  currentCards,
}) => {
  const counters = useSelector(
    (state: RootStoreState) => state.dictionary.counters
  );
  const currentWord = currentCards[activeCardNumber]?.foreignWord;
  const currentCount = counters[currentWord];
  return (
    <>
      {currentCount !== undefined && currentCount < stepToChangeTestType
        && (
          <AnswerOptions flashCardData={currentCards} />
        )}

      {currentCount !== undefined &&
        currentCount >= stepToChangeTestType
        &&
        currentCount < stepToChangeTestType
        * 2 && (
          <EnteredMatch
            flashCardData={currentCards}
            languageTested={languageMatchTested.RUSSIAN}
          />
        )}

      {currentCount !== undefined &&
        currentCount >= stepToChangeTestType
        * 2 && (
          <EnteredMatch
            flashCardData={currentCards}
            languageTested={languageMatchTested.FOREIGN}
          />
        )}
    </>
  );
};

export default CardIdentifier;
