import { List, ListItemButton, Radio, FormControlLabel } from "@mui/material";
import { useDispatch, useSelector, batch } from "react-redux";
import { RootStoreState } from "../../../../redux/store";
import useAnswerMatchingChecker from "../../../../hooks/useAnswerMatchingChecker";
import { increaseActiveCardNumber } from "../../../../redux/testSlice";
import { flashCardProp } from "../FlashCards";
import { useState } from "react";

const AnswerOptions: React.FC<flashCardProp> = ({ flashCardData }) => {
  const dispatch = useDispatch();
  const checkAnswer = useAnswerMatchingChecker();
  const [selectedAnswerOption, setSelectedAnswerOption] = useState("");
  const activeCardNumber = useSelector(
    (state: RootStoreState) => state.test.activeCardNumber
  );

  const handleRadio = (answerOption: string) => {
    batch(() => {
      setSelectedAnswerOption(answerOption);
      checkAnswer(answerOption);
      setTimeout(() => {
        dispatch(increaseActiveCardNumber());
        setSelectedAnswerOption("");
      }, 500);
    });
  };

  return (
    <>
      {flashCardData[activeCardNumber].russianWord}
      <List>
        {flashCardData[activeCardNumber].answerOptionsInForeign.map(
          (answerOption: string) => (
            <ListItemButton key={answerOption}>
              <FormControlLabel
                value={answerOption}
                control={
                  <Radio
                    edge="start"
                    id={answerOption}
                    value={answerOption}
                    checked={selectedAnswerOption === answerOption}
                    tabIndex={-1}
                    onChange={() => handleRadio(answerOption)}
                  />
                }
                label={answerOption}
              />
            </ListItemButton>
          )
        )}
      </List>
    </>
  );
};

export default AnswerOptions;
