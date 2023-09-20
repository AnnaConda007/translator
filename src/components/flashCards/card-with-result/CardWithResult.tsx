import { List, ListItemText, ListItem } from "@mui/material";
import { useSelector } from "react-redux";
import { RootStoreState } from "../../../redux/store";
import NextButton from "../next-button/NextButton";

const CardWithResult: React.FC = () => {
  const testResults = useSelector(
    (state: RootStoreState) => state.test.testResult
  );

  return (
    <>
      <List>
        {testResults.map((result, index) => (
          <ListItem key={`${result.foreignWord}${index}`}>
            <ListItemText
              primary={`${result.foreignWord} : ${result.russianWord}   ${result.correctAnswer}`}
            />
          </ListItem>
        ))}
      </List>
      <NextButton />
    </>
  );
};

export default CardWithResult;
