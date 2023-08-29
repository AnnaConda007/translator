import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootStoreState } from "../../redux/store";
import { List, ListItem, ListItemText, Divider } from "@mui/material";
import { setBook } from "../../redux/selectedBookSlice";
import useFetchBooksFromDatabase from "../../hooks/useFetchBooksFromDatabase";

const BookList: React.FC = () => {
  const dispatch = useDispatch();
  const loadedBooks = useSelector((state: RootStoreState) => state.books);
  const filteredBookTitles = useSelector(
    (state: RootStoreState) => state.titleList
  );
  useFetchBooksFromDatabase();

  const handleBookClick = (bookName: string) => {
    dispatch(setBook(loadedBooks[bookName]));
  };
  return (
    <List>
      {filteredBookTitles.map((bookName) => (
        <React.Fragment key={bookName}>
          <ListItem onClick={() => handleBookClick(bookName)}>
            <ListItemText primary={bookName} />
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
};

export default BookList;
