import { List, ListItemText, ListItem } from "@mui/material";
 import { useSelector } from 'react-redux';
import { RootStoreState } from '../../../redux/store';

 

const CardWithResult: React.FC  = () => {
  const testResults = useSelector((state:RootStoreState)=> state.test.testResult)
  return (
    <>
      <List>
        {testResults.map((result) => (
          <ListItem key={result.foreignWord}>
            <ListItemText
              primary={`${result.foreignWord} : ${result.russianWord}   ${result.mistake}`}
            />
          </ListItem>
        ))}
      </List>
      <button> далее</button>
    </>
  );
};

export default CardWithResult;
