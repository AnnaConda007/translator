import { useSelector,useDispatch } from "react-redux";
import { RootStoreState } from "../../redux/store";
import { IDictionary } from "../../redux/dictionarySlice";
import { List, ListItem, ListItemText } from "@mui/material";
import { removeWord } from "../../redux/dictionarySlice";
const Dictionary: React.FC = () => {
  const dispatch = useDispatch();
  const dictionary: IDictionary = useSelector(
    (state: RootStoreState) => state.dictionary
  );

  const handleDelite = (index: number) => {
    dispatch(removeWord(index));
  };
  return (
    <List>
      {dictionary.map((entry, index) => {
        const keyName = Object.keys(entry)[0];
        return (
          <ListItem key={index} dense>
            <ListItemText primary={`${keyName} : ${entry[keyName]}`} />
            <button onClick={() => handleDelite(index)}>delete</button>
          </ListItem>
        );
      })}
    </List>
  );
};

export default Dictionary;
