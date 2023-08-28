import { useSelector } from "react-redux";
import { List, ListItem, ListItemText, Divider } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
 import { setBook } from '../../redux/selectedBookSlice';
import { RootStoreState } from "../../redux/store";
import useFetchBooksFromDatabase from "../../hooks/useFetchBooksFromDatabase";

const BookList: React.FC = () => {
  const dispatch = useDispatch();
  const books = useSelector((state: RootStoreState) => state.books);

  useFetchBooksFromDatabase();

  const handleBookClick = (bookName: string) => {
    console.log(books[bookName])
    dispatch(setBook(books[bookName]));

  };
  return (
    <List>
      {Object.keys(books).map((bookName) => (
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
