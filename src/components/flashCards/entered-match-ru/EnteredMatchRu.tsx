import { useDispatch, useSelector } from "react-redux";
import { RootStoreState } from "../../../redux/store";
import { List, TextField, Typography } from "@mui/material";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { increaseActiveCardNumber } from "../../../redux/testSlice";
import useCheckMatchAnswer from "../../../hooks/useCheckMatchAnswer";
import { flashCardProp } from "../FlashCards";
import { useState } from "react";
import { batch } from "react-redux";
const EnteredMatchRu: React.FC<flashCardProp> = ({ FlashCardData }) => {
  const dispatch = useDispatch();
  const [enter, setEnter] = useState(false);
  const checkAnswer = useCheckMatchAnswer();
  const [answerValue, setAnswerValue] = useState("");

  const activeCardNumber = useSelector(
    (state: RootStoreState) => state.test.activeCardNumber
  );

  const handleChange = (value: string) => {
    setAnswerValue(value.toLowerCase());
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key != "Enter") return;
    setEnter(true);
    batch(() => {
      checkAnswer(answerValue);
      setTimeout(() => {
        dispatch(increaseActiveCardNumber());
        setAnswerValue("");
      }, 500);
    });
  };

  return (
    <>
      <List>
        <Typography gutterBottom variant="h5" component="p">
          {FlashCardData[activeCardNumber].foreignWord}
        </Typography>
        <TextField
          id="standard-basic"
          variant="standard"
          onChange={(e) => handleChange(e.target.value)}
          onKeyDown={handleKeyPress}
          value={answerValue}
          autoComplete="off"
        />
        <ArrowForwardIosRoundedIcon />
        {enter && FlashCardData[activeCardNumber].foreignWord != answerValue ? (
          <span>{FlashCardData[activeCardNumber].foreignWord} </span>
        ) : null}
      </List>
    </>
  );
};

export default EnteredMatchRu;
