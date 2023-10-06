import { List, ListItemText, ListItem } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootStoreState } from "../../../../redux/store";
import NextButton from "../next-button/NextButton";
import { ITestResult } from "../../../../redux/testSlice";
import { useEffect } from "react";
import { updateAndPullDictionary } from "../../../../redux/thunks/dictionaryActions";
import { AppDispatch } from "../../../../redux/store";

const CardWithResult: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const testResults: Array<ITestResult> = useSelector(
    (state: RootStoreState) => state.test.testResult
  );
  useEffect(() => {
    dispatch(updateAndPullDictionary(testResults));
  }, [dispatch, testResults]);

  return (
    <>
      <List>
        {testResults.map((result, index) => (
          <ListItem key={`${result.foreignWord}${index}`}>
            <ListItemText
              primary={`${result.foreignWord} : ${result.russianWord}`}
            />
          </ListItem>
        ))}
      </List>
      <NextButton />
    </>
  );
};

export default CardWithResult;
