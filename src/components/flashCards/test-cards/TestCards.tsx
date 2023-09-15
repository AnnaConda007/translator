import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { RootStoreState } from "../../../redux/store";
import CardWithResult from "./card-with-result/CardWithResult";
import AnswerOptions from "./answer-options/AnswerOptions";
import { amountOfTestCard } from "../../../contains";
import { randomForeignWords } from "../../../utils/shuffleArr";
import { useEffect } from "react";
import { setCurrentCards } from "../../../redux/testSlice";
import { useDispatch } from "react-redux";
import { shuffleArr } from "../../../utils/shuffleArr";
import { IEntry } from "../../../redux/dictionarySlice";
import TranslateMatchRu from "../translate-match-ru/TranslateMatchRu";

export interface TestCardData {
  russianWord: string;
  answerOptionsInForeign: Array<string>;
  correctAnswer: string;
}

export interface testCardsProp {
  testCardData: Array<TestCardData>;
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
  const counters = useSelector(
    (state: RootStoreState) => state.dictionary.counters
  );

  const currentWord = currentCards[activeCardNumber]?.correctAnswer;
   const currentCounte = counters[currentWord];

 
  useEffect(() => {
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
            <>
              {currentCounte !== undefined &&
              currentCounte !== undefined &&
              currentCounte >= 0 ? (
                <TranslateMatchRu  testCardData={currentCards}/>
              ) : (
                <AnswerOptions testCardData={currentCards} />
              )}
            </>
          )}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TestCards;
