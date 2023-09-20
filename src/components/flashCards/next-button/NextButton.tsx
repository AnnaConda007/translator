import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { RootStoreState } from "../../../redux/store";
import { updateDictionaryInBD } from "../../../utils/updateDictionaryToBD";
import { IDictionary, IEntry } from "../../../redux/dictionarySlice";
import { TestResult } from "../../../redux/testSlice";
import { IDataToUpdateDictionaryBD } from "../../../utils/updateDictionaryToBD";
import { useDispatch } from "react-redux";
import {
  setCurrentCards,
  resetActiveCardNumber,
  resetTestResult,
} from "../../../redux/testSlice";
import { shuffleArr } from "../../../utils/shuffleArr";
import { dataFromBD } from "../../../redux/dictionarySlice";
import { updateCounter } from "../../../redux/dictionarySlice";
const NextButton: React.FC = () => {
  const dispatch = useDispatch();
  const currentCards = useSelector(
    (state: RootStoreState) => state.test.currentCards
  );
  const testResults = useSelector(
    (state: RootStoreState) => state.test.testResult
  );

  const dictionary: IDictionary = useSelector(
    (state: RootStoreState) => state.dictionary
  );

  const combiningCounterDictionary: Array<dataFromBD> = dictionary.words.map(
    (word) => {
      return {
        russianWord: word.russianWord,
        foreignWord: word.foreignWord,
        counter: dictionary.counters[word.foreignWord],
      };
    }
  );
  const matchedDictionaryEntries = combiningCounterDictionary.filter(
    (dictionaryEntry: IEntry) =>
      testResults.some(
        (testResult: TestResult) =>
          testResult.foreignWord === dictionaryEntry.foreignWord
      )
  );

  const entriesObject: IDataToUpdateDictionaryBD =
    matchedDictionaryEntries.reduce(
      (acc: IDataToUpdateDictionaryBD, currentEntry: dataFromBD) => {
        acc[currentEntry.foreignWord] = currentEntry;
        return acc;
      },
      {}
    );

  const handleButton = async () => {
    const shuffledCards = shuffleArr(currentCards);
    dispatch(setCurrentCards(shuffledCards));
    dispatch(resetActiveCardNumber());
    dispatch(resetTestResult());
    dispatch(updateCounter(testResults));
    await updateDictionaryInBD(entriesObject);
  };

  return (
    <Button variant="contained" color="primary" onClick={handleButton}>
      далее
    </Button>
  );
};

export default NextButton;
