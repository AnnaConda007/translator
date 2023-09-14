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
  const dictionary = useSelector(
    (state: RootStoreState) => state.dictionary.words
  );

  const mistake = useSelector((state: RootStoreState) => state.test.mistake);

  const updateTestResult = () => {
    dispatch(
      setTestResult({
        russianWord: dictionary[activeCardNumber].russianWord,
        foreignWord: dictionary[activeCardNumber].translatedWord,
        mistake: mistake ? "+" : "-",
      })
    );
  };
  return updateTestResult;
};

export default useAddTestResult;
