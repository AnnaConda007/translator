import { AppDispatch } from "../redux/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootStoreState } from "../redux/store";
import { setTestResult } from "../redux/testSlice";

const useAddTestResult = () => {
  const dispatch: AppDispatch = useDispatch();
  const activeCardNumber = useSelector(
    (state: RootStoreState) => state.test.activeCardNumber
  );
  const currentCards = useSelector(
    (state: RootStoreState) => state.test.currentCards
  );

  const updateTestResult = (mistake: boolean) => {
    dispatch(
      setTestResult({
        russianWord: currentCards[activeCardNumber].russianWord,
        foreignWord: currentCards[activeCardNumber].foreignWord,
        correctAnswer: mistake ? true : false,
      })
    );
  };
  return updateTestResult;
};

export default useAddTestResult;
