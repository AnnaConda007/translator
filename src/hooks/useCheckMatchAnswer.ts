import { useSelector } from "react-redux";
import { RootStoreState } from "../redux/store";
import useAddTestResult from "./useAddTestResult";

const useCheckMatchAnswer = () => {
  const updateTestResult = useAddTestResult();
  const currentCards = useSelector(
    (state: RootStoreState) => state.test.currentCards
  );
  const activeCardNumber = useSelector(
    (state: RootStoreState) => state.test.activeCardNumber
  );
  const checkAnswer = (selectedAnswerOption: string) => {
    const check =
      currentCards[activeCardNumber].russianWord === selectedAnswerOption ||
      currentCards[activeCardNumber].foreignWord === selectedAnswerOption;
    updateTestResult(check);
  };
  return checkAnswer;
};

export default useCheckMatchAnswer;
