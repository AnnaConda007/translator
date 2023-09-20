import { List, ListItemText, ListItemButton, Radio } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootStoreState } from "../../../redux/store";
import useCheckMatchAnswer from "../../../hooks/useCheckMatchAnswer";
import { increaseActiveCardNumber } from "../../../redux/testSlice";
import { flashCardProp } from "../FlashCards";
import { batch } from "react-redux";
import { useState } from "react";

const AnswerOptions: React.FC<flashCardProp> = ({ FlashCardData }) => {
  const dispatch = useDispatch();
  const checkAnsver = useCheckMatchAnswer();
  const [selectedAnswerOption, setSelectedAnswerOption] = useState("");
  const activeCardNumber = useSelector(
    (state: RootStoreState) => state.test.activeCardNumber
  );

  const handleRadio = (answerOption: string) => {
    setSelectedAnswerOption(answerOption);
    checkAnsver(answerOption);
    batch(() => {
      setTimeout(() => {
        dispatch(increaseActiveCardNumber());
        setSelectedAnswerOption("")
      }, 500);
    });
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
