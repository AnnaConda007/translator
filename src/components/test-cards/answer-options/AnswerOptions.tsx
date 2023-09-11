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
  const handleRadio = (
    testAnswer: string,
    currentForeignWord: string,
    currentRussianWord: string
  ) => {
    if (activeCardNumber === amountOfTestCard) return;
    dispatch(setSelectedAnswerOption(testAnswer));
    dispatch(resetSelectedAnswerOption());
    dispatch(increaseActiveCardNumber());
    dispatch(
      setTestResult({
        russianWord: currentRussianWord,
        foreignWord: currentForeignWord,
        mistake: testAnswer === currentForeignWord ? "+" : "-",
      })
    );
    if (testAnswer === currentForeignWord) {
      dispatch(
        updateCounter({
          translatedWord: currentForeignWord,
          count: CountAction.INCREASE,
        })
      );
    } else
      dispatch(
        updateCounter({
          translatedWord: currentForeignWord,
          count: CountAction.DECREASE,
        })
      );
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
