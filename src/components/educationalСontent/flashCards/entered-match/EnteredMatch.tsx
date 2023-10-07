import { useDispatch, useSelector, batch } from "react-redux";
import { RootStoreState } from "../../../../redux/store";
import { List, TextField, Typography } from "@mui/material";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import {
  IFlashCardData,
  increaseActiveCardNumber,
} from "../../../../redux/testSlice";
import useAnswerMatchingChecker from "../../../../hooks/useAnswerMatchingChecker";
import { useState } from "react";
import CorrectAnswer from "../correct-answer/CorrectAnswer";
import { LanguageMatchTested } from '../../../../enums/dictionaryEnum';
import theme from '../../../../muiThem';


interface EnteredMatchProps {
  flashCardData: Array<IFlashCardData>;
  languageTested: LanguageMatchTested;
}
const EnteredMatch: React.FC<EnteredMatchProps> = ({
  flashCardData,
  languageTested,
}) => {
  const [anwerColor, setAnswerColor] = useState("")
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
      const check = checkAnswer(answerValue);
      setAnswerColor(check ? theme.palette.success.light : theme.palette.error.light)
      setTimeout(() => {
        dispatch(increaseActiveCardNumber());
        setAnswerValue("");
        setAnswerButtonClicked(false);
        setAnswerColor("")
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
          {languageTested === LanguageMatchTested.RUSSIAN
            ? flashCardData[activeCardNumber].foreignWord
            : flashCardData[activeCardNumber].russianWord}
        </Typography>
        <TextField sx={{ backgroundColor: anwerColor }}
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
