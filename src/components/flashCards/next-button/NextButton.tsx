import Button from "@mui/material/Button";
import { useSelector, batch } from "react-redux";
import { RootStoreState } from "../../../redux/store";
import { updateDictionaryInBD } from "../../../utils/updateDictionaryToBD";
import { IDictionary } from "../../../redux/dictionarySlice";
import { IDataToUpdateDictionaryBD } from "../../../utils/updateDictionaryToBD";
import { useDispatch } from "react-redux";
import {
  setCurrentCards,
  resetActiveCardNumber,
  resetTestResult,
} from "../../../redux/testSlice";
import { shuffleArr } from "../../../utils/shuffleArr";
import { updateCounter } from "../../../redux/dictionarySlice";
import { transformationObjToBD } from "../../../utils/transformationObjToBD";

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

  const entriesObject: IDataToUpdateDictionaryBD = transformationObjToBD(
    dictionary,
    testResults
  );

  const handleButton = async () => {
    const shuffledCards = shuffleArr(currentCards);
    batch(() => {
      dispatch(setCurrentCards(shuffledCards));
      dispatch(resetActiveCardNumber());
      dispatch(resetTestResult());
      dispatch(updateCounter(testResults));
    });
    await updateDictionaryInBD(entriesObject);
  };

  return (
    <Button variant="contained" color="primary" onClick={handleButton}>
      далее
    </Button>
  );
};

export default NextButton;
