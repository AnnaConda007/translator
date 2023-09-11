import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { RootStoreState } from "../../redux/store";
import { IEntry, IDictionary } from "../../redux/dictionarySlice";
import { useEffect } from "react";
import { getDictionaryFromBD } from "../../utils/getDictionaryFromBD";
import { useDispatch } from "react-redux";
import { setDictionary } from "../../redux/dictionarySlice";
import CardWithResult from "./card-with-result/CardWithResult";
import AnswerOptions from "./answer-options/AnswerOptions";
import { amountOfTestCard } from "../../contains";
import { randomForeignWords } from "../../utils/shuffleArr";

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
  const dictionary: IDictionary = useSelector(
    (state: RootStoreState) => state.dictionary
  );
  const foreignWords: Array<string> = dictionary.map(
    (entry) => entry.translatedWord
  );
  console.log(dictionary)

  useEffect(() => {
    getDictionaryFromBD(dispatch, setDictionary);
  }, [dispatch]);
  if (!dictionary.length) return;

  const testCardData: Array<TestCardData> = dictionary.map((entry: IEntry) => {
    return {
      russianWord: entry.russianWord,
      answerOptionsInForeign: randomForeignWords(
        foreignWords,
        entry.translatedWord
      ),
      correctAnswer: entry.translatedWord,
    };
  });

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {activeCardNumber === amountOfTestCard ? (
            <CardWithResult />
          ) : (
            <AnswerOptions testCardData={testCardData} />
          )}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TestCards;
