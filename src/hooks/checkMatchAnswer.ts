import { useDispatch, useSelector } from "react-redux";
import { RootStoreState } from "../redux/store";
import { updateCounter } from "../redux/dictionarySlice";
import { CountAction } from "../components/enum";
import { setMistake } from "../redux/testSlice";

const useCheckMatchAnswer = () => {
  const dispatch = useDispatch();
  const dictionary = useSelector(
    (state: RootStoreState) => state.dictionary.words
  );
  const activeCardNumber = useSelector(
    (state: RootStoreState) => state.test.activeCardNumber
  );
  const checkAnswer = (selectedAnswerOption: string) => {
    const check =
      dictionary[activeCardNumber].russianWord === selectedAnswerOption ||
      dictionary[activeCardNumber].translatedWord === selectedAnswerOption;
    if (check) {
      dispatch(
        updateCounter({
          translatedWord: dictionary[activeCardNumber].translatedWord,
          count: CountAction.INCREASE,
        })
      );
    } else dispatch(setMistake(true));
    dispatch(
      updateCounter({
        translatedWord: dictionary[activeCardNumber].translatedWord,
        count: CountAction.DECREASE,
      })
    );
  };

  return checkAnswer;
};

export default useCheckMatchAnswer;
