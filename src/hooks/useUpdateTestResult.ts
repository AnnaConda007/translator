import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { AppDispatch } from "../redux/store";
import { RootStoreState } from "../redux/store";
import { setTestResult } from "../redux/testSlice";

const useUpdateTestResult = () => {
  const dispatch: AppDispatch = useDispatch();
  const activeCardNumber = useSelector(
    (state: RootStoreState) => state.test.activeCardNumber,
  );
  const currentCards = useSelector(
    (state: RootStoreState) => state.test.currentCards,
  );
  return (isAnswerCorrect: boolean) => {
    dispatch(
      setTestResult({
        russianWord: currentCards[activeCardNumber].russianWord,
        foreignWord: currentCards[activeCardNumber].foreignWord,
        correctAnswer: isAnswerCorrect,
      }),
    );
  };
};

export default useUpdateTestResult;
