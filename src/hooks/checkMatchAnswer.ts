import { useDispatch, useSelector } from "react-redux";
import { RootStoreState } from "../redux/store";
import { updateCounter } from "../redux/dictionarySlice";
import { CountAction } from "../components/enum";
import { setMistake } from "../redux/testSlice";

const useCheckMatchAnswer = () => {
  const dispatch = useDispatch();
  const currentCards = useSelector(
    (state: RootStoreState) => state.test.currentCards
  );
  const activeCardNumber = useSelector(
    (state: RootStoreState) => state.test.activeCardNumber
  );
  const checkAnswer = (selectedAnswerOption: string) => {
    const check =
      currentCards[activeCardNumber].russianWord === selectedAnswerOption ||
      currentCards[activeCardNumber].correctAnswer === selectedAnswerOption;
    if (check) {
      dispatch(
        updateCounter({
          translatedWord: currentCards[activeCardNumber].correctAnswer,
          count: CountAction.INCREASE,
        })
      );
    } else {
      dispatch(setMistake(true));
      dispatch(
        updateCounter({
          translatedWord: currentCards[activeCardNumber].correctAnswer,
          count: CountAction.DECREASE,
        })
      );
    }
  };

  return checkAnswer;
};

export default useCheckMatchAnswer;
