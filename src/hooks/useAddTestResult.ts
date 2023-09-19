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

  const mistake = useSelector((state: RootStoreState) => state.test.mistake);

  const updateTestResult = () => {
    dispatch(
      setTestResult({
        russianWord: currentCards[activeCardNumber].russianWord,
        foreignWord: currentCards[activeCardNumber].correctAnswer,
        mistake: mistake ? "+" : "-",
      })
    );
  };
  return updateTestResult;
};

export default useAddTestResult;
