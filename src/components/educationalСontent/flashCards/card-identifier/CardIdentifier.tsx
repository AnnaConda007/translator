import { useSelector } from "react-redux";
import EnteredMatch from "../entered-match/EnteredMatch";
import AnswerOptions from "../tests-answer-options/AnswerOptions";
import { IFlashCardData } from "../../../../redux/testSlice";
import { RootStoreState } from "../../../../redux/store";
import {
  stepToChangeTestType
} from "../../../../contains";
import { LanguageMatchTested } from '../../../../enums/dictionaryEnum';

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
      {/*currentCount == undefined && null*/}
      {currentCount < stepToChangeTestType
        && (
          <AnswerOptions flashCardData={currentCards} />
        )}

      {currentCount >= stepToChangeTestType
        &&
        currentCount < stepToChangeTestType
        * 2 && (
          <EnteredMatch
            flashCardData={currentCards}
            languageTested={LanguageMatchTested.RUSSIAN}
          />
        )}

      {currentCount >= stepToChangeTestType
        * 2 && (
          <EnteredMatch
            flashCardData={currentCards}
            languageTested={LanguageMatchTested.FOREIGN}
          />
        )}
    </>
  );
};

export default CardIdentifier;
