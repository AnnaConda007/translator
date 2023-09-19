import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { RootStoreState } from "../../redux/store";
import CardWithResult from "./card-with-result/CardWithResult";
import AnswerOptions from "./tests-answer-options/AnswerOptions";
import { amountOfTestCard } from "../../contains";
import { randomForeignWords } from "../../utils/shuffleArr";
import { useEffect } from "react";
import { setCurrentCards } from "../../redux/testSlice";
import { useDispatch } from "react-redux";
import { shuffleArr } from "../../utils/shuffleArr";
import { IEntry } from "../../redux/dictionarySlice";
import EnteredMatchRu from "./entered-match-ru/EnteredMatchRu";

export interface FlashCardData {
  russianWord: string;
  answerOptionsInForeign: Array<string>;
  correctAnswer: string;
}

export interface flashCardProp {
  FlashCardData: Array<FlashCardData>;
}

const FlashCards = () => {
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
  console.log("dictionary", dictionary)
  const counters = useSelector(
    (state: RootStoreState) => state.dictionary.counters
  );

  const currentWord = currentCards[activeCardNumber]?.correctAnswer;
  const currentCounte = counters[currentWord];

  useEffect(() => {
    const foreignWords: Array<string> = dictionary.map(
      (entry) => entry.foreignWord
    );

    const FlashCardData: Array<FlashCardData> = dictionary.map((entry) => {
      return {
        russianWord: entry.russianWord,
        answerOptionsInForeign: randomForeignWords(
          foreignWords,
          entry.foreignWord
        ),
        correctAnswer: entry.foreignWord,
      };
    });
    dispatch(setCurrentCards(shuffleArr(FlashCardData)));
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
                <EnteredMatchRu FlashCardData={currentCards} />
              ) : (
                <AnswerOptions FlashCardData={currentCards} />
              )}
            </>
          )}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FlashCards;
