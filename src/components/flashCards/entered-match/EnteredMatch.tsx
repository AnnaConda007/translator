import { useDispatch, useSelector, batch } from "react-redux";
import { RootStoreState } from "../../../redux/store";
import { List, TextField, Typography } from "@mui/material";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import {
  IFlashCardData,
  increaseActiveCardNumber,
} from "../../../redux/testSlice";
import useAnswerMatchingChecker from "../../../hooks/useAnswerMatchingChecker";
import { useState } from "react";
import CorrectAnswer from "../correct-answer/CorrectAnswer";
import { languageMatchTested } from "../../enum";
interface EnteredMatchProps {
  flashCardData: Array<IFlashCardData>;
  languageTested: languageMatchTested;
}
const EnteredMatch: React.FC<EnteredMatchProps> = ({
  flashCardData,
  languageTested,
}) => {
  const dispatch = useDispatch();
  const checkAnswer = useAnswerMatchingChecker();
  const [answerButtonClicked, setAnswerButtonClicked] = useState(false);
  const [answerValue, setAnswerValue] = useState("");
  const activeCardNumber = useSelector(
    (state: RootStoreState) => state.test.activeCardNumber
  );
  const handleChange = (value: string) => {
    setAnswerValue(value.toLowerCase());
  };
  const handleAnswer = () => {
    batch(() => {
      setAnswerButtonClicked(true);
      checkAnswer(answerValue);
      setTimeout(() => {
        dispatch(increaseActiveCardNumber());
        setAnswerValue("");
        setAnswerButtonClicked(false);
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
          {languageTested === languageMatchTested.RUSSIAN
            ? flashCardData[activeCardNumber].foreignWord
            : flashCardData[activeCardNumber].russianWord}
        </Typography>
        <TextField
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
            ruWord={languageTested}
          />
        )}
      </List>
    </>
  );
};

export default EnteredMatch;
