import { ListItemText, Box, List } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootStoreState } from "../../../../redux/store";
import NextButton from "../next-button/NextButton";
import { ITestResult } from "../../../../redux/testSlice";
import { useEffect } from "react";
import { updateAndPullDictionary } from "../../../../redux/thunks/dictionaryActions";
import { AppDispatch } from "../../../../redux/store";
import { ListItemStyled, ListItemTextStyled } from '../../Styled';


const CardWithResult: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const testResults: Array<ITestResult> = useSelector(
    (state: RootStoreState) => state.test.testResult
  );
  useEffect(() => {
    dispatch(updateAndPullDictionary(testResults));
  }, [dispatch, testResults]);

  return (
    <Box sx={{ padding: "0" }}>
      <List sx={{}}>
        {testResults.map((result, index) => (
          <ListItemStyled sx={{ padding: "0px" }} key={`${result.foreignWord}${index}`}>
            <ListItemTextStyled 
              primary={`${result.foreignWord} : ${result.russianWord}`}
            />
          </ListItemStyled>
        ))}
      </List>
      <NextButton />
    </Box>
  );
};

export default CardWithResult;
