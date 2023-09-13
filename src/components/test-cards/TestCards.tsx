import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { RootStoreState } from "../../redux/store";
 import CardWithResult from "./card-with-result/CardWithResult";
import AnswerOptions from "./answer-options/AnswerOptions";
import { amountOfTestCard } from "../../contains";
import { randomForeignWords } from "../../utils/shuffleArr";
import { useEffect } from "react";
import { setCurrentCards } from "../../redux/testSlice";
import { useDispatch } from "react-redux";
import { shuffleArr } from "../../utils/shuffleArr";
import { IEntry } from '../../redux/dictionarySlice';

export interface TestCardData {
  russianWord: string;
  answerOptionsInForeign: Array<string>;
  correctAnswer: string;
}

const TestCards = () => {
  const dispatch = useDispatch();
  const activeCardNumber = useSelector(
    (state: RootStoreState) => state.test.activeCardNumber
  );
  const currentCards = useSelector(
    (state: RootStoreState) => state.test.currentCards
  );
  const dictionary: Array<IEntry> = useSelector(
    (state: RootStoreState) => state.dictionary.words
  );

  useEffect(() => { 
    console.log("**")
    const foreignWords: Array<string> = dictionary.map(
      (entry) => entry.translatedWord
    );
    const testCardData: Array<TestCardData> = dictionary.map((entry) => {
      return {
        russianWord: entry.russianWord,
        answerOptionsInForeign: randomForeignWords(
          foreignWords,
          entry.translatedWord
        ),
        correctAnswer: entry.translatedWord,
      };
    });
    console.log("testCardData", testCardData)
    dispatch(setCurrentCards(shuffleArr(testCardData)));
  }, [dictionary, dispatch]);

  if (!currentCards.length) return null;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {activeCardNumber === amountOfTestCard ? (
            <CardWithResult />
          ) : (
            <AnswerOptions testCardData={currentCards} />
          )}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TestCards;
