import { useDispatch, useSelector } from "react-redux";
import { RootStoreState } from "../../../redux/store";
import { List, TextField, Typography } from "@mui/material";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { increaseActiveCardNumber } from "../../../redux/testSlice";
import { setSelectedAnswerOption, setMistake } from "../../../redux/testSlice";
import useAddTestResult from "../../../hooks/useAddTestResult";
import useCheckMatchAnswer from "../../../hooks/useCheckMatchAnswer";
import { flashCardProp } from "../FlashCards";

const EnteredMatchForeign: React.FC<flashCardProp> = ({ FlashCardData }) => {
  const dispatch = useDispatch();
  const updateTestResult = useAddTestResult();
  const checkAnswer = useCheckMatchAnswer();
  const mistake = useSelector((state: RootStoreState) => state.test.mistake);
  const selectedAnswerOption = useSelector(
    (state: RootStoreState) => state.test.selectedAnswerOption
  );
  const activeCardNumber = useSelector(
    (state: RootStoreState) => state.test.activeCardNumber
  );

  const handleChange = (value: string) => {
    if (!value) return;
    dispatch(setSelectedAnswerOption(value.toLowerCase().trim()));
  };
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key != "Enter") return;
    setTimeout(() => {
      dispatch(setMistake(false));
    }, 1000);
    updateTestResult();
    checkAnswer(selectedAnswerOption);
    dispatch(increaseActiveCardNumber());
    dispatch(setSelectedAnswerOption(""));
  };

  return (
    <>
      <List>
        <Typography gutterBottom variant="h5" component="p">
          {FlashCardData[activeCardNumber].russianWord}
        </Typography>
        <TextField
          id="standard-basic"
          variant="standard"
          onChange={(e) => handleChange(e.target.value)}
          onKeyDown={handleKeyPress}
          value={selectedAnswerOption}
          autoComplete="off"
        />
        <ArrowForwardIosRoundedIcon />
        {mistake && FlashCardData[activeCardNumber].correctAnswer}
      </List>
    </>
  );
};

export default EnteredMatchForeign;
