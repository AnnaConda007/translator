import { useSelector } from "react-redux";
import { stepToChangeTestType } from "../../../../contains";
import { LanguageMatchTested } from "../../../../enums/dictionaryEnum";
import { RootStoreState } from "../../../../redux/store";
import { IFlashCardData } from "../../../../redux/testSlice";
import EnteredMatch from "../entered-match/EnteredMatch";
import AnswerOptions from "../tests-answer-options/AnswerOptions";

interface CardIdentifierProp {
  activeCardNumber: number;
  currentCards: Array<IFlashCardData>;
}
const CardIdentifier: React.FC<CardIdentifierProp> = ({
  activeCardNumber,
  currentCards,
}) => {
  const counters = useSelector(
    (state: RootStoreState) => state.dictionary.counters,
  );
  const currentWord = currentCards[activeCardNumber]?.foreignWord;
  const currentCount = counters[currentWord];
  return (
    <>
      {currentCount < stepToChangeTestType && (
        <AnswerOptions flashCardData={currentCards} />
      )}

      {currentCount >= stepToChangeTestType &&
        currentCount < stepToChangeTestType * 2 && (
          <EnteredMatch
            flashCardData={currentCards}
            languageTested={LanguageMatchTested.RUSSIAN}
          />
        )}

      {currentCount >= stepToChangeTestType * 2 && (
        <EnteredMatch
          flashCardData={currentCards}
          languageTested={LanguageMatchTested.FOREIGN}
        />
      )}
    </>
  );
};

export default CardIdentifier;
