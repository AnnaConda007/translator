import { useEffect } from "react";
import { Box, List } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootStoreState } from "../../../../redux/store";
import { AppDispatch } from "../../../../redux/store";
import { ITestResult } from "../../../../redux/testSlice";
import { updateAndPullDictionary } from "../../../../redux/thunks/dictionaryActions";
import { ListItemStyled, ListItemTextStyled } from "../../Styled";
import NextButton from "../next-button/NextButton";

const CardWithResult: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const testResults: Array<ITestResult> = useSelector(
    (state: RootStoreState) => state.test.testResult,
  );
  useEffect(() => {
    dispatch(updateAndPullDictionary(testResults));
  }, [dispatch, testResults]);

  return (
    <Box sx={{ padding: "0" }}>
      <List sx={{}}>
        {testResults.map((result, index) => (
          <ListItemStyled
            sx={{ padding: "0px" }}
            key={`${result.foreignWord}${index}`}
          >
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
