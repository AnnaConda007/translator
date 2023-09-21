import { useSelector } from "react-redux";
import { RootStoreState } from "../redux/store";
import useUpdateTestResult from "./useUpdateTestResult";

const useAnswerMatchingChecker = () => {
  const updateTestResult = useUpdateTestResult();
  const currentCards = useSelector(
    (state: RootStoreState) => state.test.currentCards
  );
  const activeCardNumber = useSelector(
    (state: RootStoreState) => state.test.activeCardNumber
  );

  const checkAnswer = (selectedAnswerOption: string) => {
    const isAnswerCorrect =
      currentCards[activeCardNumber].russianWord === selectedAnswerOption ||
      currentCards[activeCardNumber].foreignWord === selectedAnswerOption;
    updateTestResult(isAnswerCorrect);
  };
  return checkAnswer;
};

export default useAnswerMatchingChecker;
