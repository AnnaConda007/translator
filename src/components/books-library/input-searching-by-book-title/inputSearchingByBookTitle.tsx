import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootStoreState } from "../../../redux/store";
 import { TextField } from "@mui/material";
import { setTitles } from '../../../redux/librarySlice';
const InputSearchingByBookTitle: React.FC = () => {
  const dispatch = useDispatch();
  const loadedBooks = useSelector((state: RootStoreState) => state.library.books);
  const bookTitles = Object.keys(loadedBooks);
  const [inputValue, setInputValue] = useState<string>("");

  const filterBooksByTitle = (value: string) => {
    const filteredArr = bookTitles.filter((titleBook) =>
      titleBook.toLowerCase().includes(value.toLowerCase())
    );
    dispatch(setTitles(filteredArr));
    setInputValue(value);
  };

  return (
    <TextField
      id="standard-basic"
      label="Найти книгу"
      variant="standard"
      value={inputValue}
      onChange={(e) => filterBooksByTitle(e.target.value)}
    />
  );
};

export default InputSearchingByBookTitle;
