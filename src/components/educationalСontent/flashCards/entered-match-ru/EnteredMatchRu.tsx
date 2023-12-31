import { useState } from "react";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { List, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector, batch } from "react-redux";
import { LanguageMatchTested } from "../../../../enums/dictionaryEnum";
import useAnswerMatchingChecker from "../../../../hooks/useAnswerMatchingChecker";
import theme from "../../../../muiThem";
import { RootStoreState } from "../../../../redux/store";
import { increaseActiveCardNumber } from "../../../../redux/testSlice";
import CorrectAnswer from "../correct-answer/CorrectAnswer";
import { flashCardProp } from "../FlashCards";

const EnteredlanguageTested: React.FC<flashCardProp> = ({ flashCardData }) => {
  const [anwerColor, setAnswerColor] = useState("");
  const dispatch = useDispatch();
  const checkAnswer = useAnswerMatchingChecker();
  const [answerButtonClicked, setAnswerButtonClicked] = useState(false);
  const [answerValue, setAnswerValue] = useState("");
  const activeCardNumber = useSelector(
    (state: RootStoreState) => state.test.activeCardNumber,
  );
  const handleChange = (value: string) => {
    setAnswerValue(value.toLowerCase());
  };
  const handleAnswer = () => {
    batch(() => {
      setAnswerButtonClicked(true);
      const check = checkAnswer(answerValue);
      setAnswerColor(
        check ? theme.palette.success.light : theme.palette.error.light,
      );
      setTimeout(() => {
        dispatch(increaseActiveCardNumber());
        setAnswerValue("");
        setAnswerButtonClicked(false);
        setAnswerColor("");
      }, 1500);
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key !== "Enter") return;
    handleAnswer();
  };

  return (
    <>
      <List>
        <Typography gutterBottom variant="h5" component="p">
          {flashCardData[activeCardNumber].foreignWord}
        </Typography>
        <TextField
          sx={{ backgroundColor: anwerColor }}
          id="standard-basic"
          variant="standard"
          onChange={(e) => handleChange(e.target.value)}
          onKeyDown={handleKeyPress}
          value={answerValue}
          autoComplete="off"
        />
        <button aria-label="Submit Answer" onClick={handleAnswer}>
          <ArrowForwardIosRoundedIcon />
        </button>

        {answerButtonClicked && (
          <CorrectAnswer
            flashCardData={flashCardData}
            activeCardNumber={activeCardNumber}
            answerValue={answerValue}
            ruWord={LanguageMatchTested.RUSSIAN}
          />
        )}
      </List>
    </>
  );
};

export default EnteredlanguageTested;
