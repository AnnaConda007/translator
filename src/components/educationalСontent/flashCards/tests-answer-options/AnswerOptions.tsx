import { useState } from "react";
import {
  List,
  ListItemButton,
  Radio,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector, batch } from "react-redux";
import useAnswerMatchingChecker from "../../../../hooks/useAnswerMatchingChecker";
import theme from "../../../../muiThem";
import { RootStoreState } from "../../../../redux/store";
import { increaseActiveCardNumber } from "../../../../redux/testSlice";
import { flashCardProp } from "../FlashCards";

const AnswerOptions: React.FC<flashCardProp> = ({ flashCardData }) => {
  const dispatch = useDispatch();
  const checkAnswer = useAnswerMatchingChecker();
  const [selectedAnswerOption, setSelectedAnswerOption] = useState("");
  const activeCardNumber = useSelector(
    (state: RootStoreState) => state.test.activeCardNumber,
  );
  const [anwerColor, setAnswerColor] = useState("");
  const handleRadio = (answerOption: string) => {
    batch(() => {
      setSelectedAnswerOption(answerOption);
      const check = checkAnswer(answerOption);
      setAnswerColor(
        check ? theme.palette.success.light : theme.palette.error.light,
      );
      setTimeout(() => {
        dispatch(increaseActiveCardNumber());
        setSelectedAnswerOption("");
      }, 500);
    });
  };

  return (
    <>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        {flashCardData[activeCardNumber].russianWord}
      </Typography>
      <List>
        {flashCardData[activeCardNumber].answerOptionsInForeign.map(
          (answerOption: string) => (
            <ListItemButton
              sx={{
                backgroundColor:
                  selectedAnswerOption === answerOption ? anwerColor : "",
                "&:hover": {
                  backgroundColor:
                    selectedAnswerOption === answerOption
                      ? anwerColor
                      : "initial",
                },
              }}
              key={answerOption}
            >
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
          ),
        )}
      </List>
    </>
  );
};

export default AnswerOptions;
