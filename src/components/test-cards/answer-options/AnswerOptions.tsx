import { TestCardData } from "../TestCards";
import { List, ListItemText, ListItemButton, Radio } from "@mui/material";
import {
  setSelectedAnswerOption,
  resetSelectedAnswerOption,
  increaseActiveCardNumber,
  setTestResult,
} from "../../../redux/testSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootStoreState } from "../../../redux/store";
import { amountOfTestCard } from "../../../contains";
import { updateCounter } from "../../../redux/dictionarySlice";
import { CountAction } from "../../enum";
import { batch } from "react-redux";
interface AnswerOptionsProp {
  testCardData: Array<TestCardData>;
}

const AnswerOptions: React.FC<AnswerOptionsProp> = ({ testCardData }) => {
  const dispatch = useDispatch();
  const activeCardNumber = useSelector(
    (state: RootStoreState) => state.test.activeCardNumber
  );
  const selectedAnswerOption = useSelector(
    (state: RootStoreState) => state.test.selectedAnswerOption
  );

  const state = (
    currentRussianWord,
    correctForeignAnswer,
    selectedTestAnswer
  ) => {
    dispatch(setSelectedAnswerOption(selectedTestAnswer));
    dispatch(increaseActiveCardNumber());
    dispatch(
      setTestResult({
        russianWord: currentRussianWord,
        foreignWord: correctForeignAnswer,
        mistake: selectedTestAnswer === correctForeignAnswer ? "+" : "-",
      })
    );
  };
  const counter = (selectedTestAnswer, correctForeignAnswer) => {
    if (selectedTestAnswer === correctForeignAnswer) {
      dispatch(
        updateCounter({
          translatedWord: correctForeignAnswer,
          count: CountAction.INCREASE,
        })
      );
    } else
      dispatch(
        updateCounter({
          translatedWord: correctForeignAnswer,
          count: CountAction.DECREASE,
        })
      );
  };
 
  const handleRadio = (
    selectedTestAnswer: string,
    correctForeignAnswer: string,
    currentRussianWord: string
  ) => {
    if (activeCardNumber === amountOfTestCard) return;
    batch(() => {
      state(currentRussianWord, correctForeignAnswer, selectedTestAnswer);
      counter(selectedTestAnswer, correctForeignAnswer);
    });
  };

  return (
    <>
      {testCardData[activeCardNumber].russianWord}
      <List>
        {testCardData[activeCardNumber].answerOptionsInForeign.map(
          (answerOption: string) => (
            <ListItemButton key={answerOption}>
              <Radio
                edge="start"
                id={answerOption}
                value={answerOption}
                checked={selectedAnswerOption === answerOption}
                tabIndex={-1}
                onChange={() =>
                  handleRadio(
                    answerOption,
                    testCardData[activeCardNumber].correctAnswer,
                    testCardData[activeCardNumber].russianWord
                  )
                }
              />
              <label htmlFor={answerOption}>
                <ListItemText primary={answerOption} />
              </label>
            </ListItemButton>
          )
        )}
      </List>
    </>
  );
};

export default AnswerOptions;
