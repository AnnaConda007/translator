import { List, ListItemText, ListItemButton, Radio } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootStoreState } from "../../../redux/store";
import useCheckMatchAnswer from "../../../hooks/useCheckMatchAnswer";
import {
  increaseActiveCardNumber,
  setSelectedAnswerOption,
  resetSelectedAnswerOption,
} from "../../../redux/testSlice";
import useAddTestResult from "../../../hooks/useAddTestResult";
import { flashCardProp } from "../FlashCards";

const AnswerOptions: React.FC<flashCardProp> = ({ FlashCardData }) => {
   const dispatch = useDispatch();
  const checkAnsver = useCheckMatchAnswer();
  const updateTestResult = useAddTestResult();
  const activeCardNumber = useSelector(
    (state: RootStoreState) => state.test.activeCardNumber
  );
  const selectedAnswerOption = useSelector(
    (state: RootStoreState) => state.test.selectedAnswerOption
  );

  const handleRadio = (answerOption: string) => {
    setTimeout(() => {
      dispatch(resetSelectedAnswerOption());
      dispatch(increaseActiveCardNumber());
    }, 500);
    dispatch(setSelectedAnswerOption(answerOption));
    checkAnsver(answerOption);
    updateTestResult();
  };
  return (
    <>
      {FlashCardData[activeCardNumber].russianWord}
      <List>
        {FlashCardData[activeCardNumber].answerOptionsInForeign.map(
          (answerOption: string) => (
            <ListItemButton key={answerOption}>
              <Radio
                edge="start"
                id={answerOption}
                value={answerOption}
                checked={selectedAnswerOption === answerOption}
                tabIndex={-1}
                onChange={() => handleRadio(answerOption)}
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
