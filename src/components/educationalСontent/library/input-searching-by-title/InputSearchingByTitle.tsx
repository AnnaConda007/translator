import { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setFiltered } from "../../../../redux/librarySlice";
import { RootStoreState } from "../../../../redux/store";
import ReplenishLibraryButton from "../replenishLibraryButton/ReplenishLibraryButton";

const InputSearchingByTitle: React.FC = () => {
  const dispatch = useDispatch();
  const titlesBook: Array<string> = useSelector(
    (state: RootStoreState) => state.library.titlesBook,
  );
  const [inputValue, setInputValue] = useState<string>("");

  const filterBooksByTitle = (value: string) => {
    const filteredArr = titlesBook.filter((title) =>
      title.toLowerCase().includes(value.toLowerCase()),
    );
    dispatch(setFiltered(filteredArr));
    setInputValue(value);
  };

  return (
    <TextField
      sx={{}}
      id="standard-basic"
      label="Найти книгу"
      variant="standard"
      autoComplete="off"
      value={inputValue}
      onChange={(e) => filterBooksByTitle(e.target.value)}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <ReplenishLibraryButton />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default InputSearchingByTitle;
