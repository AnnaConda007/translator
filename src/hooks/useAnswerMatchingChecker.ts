import { useSelector } from "react-redux";
import useUpdateTestResult from "./useUpdateTestResult";
import { RootStoreState } from "../redux/store";

const useAnswerMatchingChecker = () => {
  const updateTestResult = useUpdateTestResult();
  const currentCards = useSelector(
    (state: RootStoreState) => state.test.currentCards,
  );
  const activeCardNumber = useSelector(
    (state: RootStoreState) => state.test.activeCardNumber,
  );
  return (selectedAnswerOption: string) => {
    const isAnswerCorrect =
      currentCards[activeCardNumber].russianWord === selectedAnswerOption ||
      currentCards[activeCardNumber].foreignWord === selectedAnswerOption;
    updateTestResult(isAnswerCorrect);
    return isAnswerCorrect;
  };
};

export default useAnswerMatchingChecker;
