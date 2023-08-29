import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootStoreState } from "../../../redux/store";
import { List, ListItem, ListItemText, Divider } from "@mui/material";
import useFetchBooksFromDatabase from "../../../hooks/useFetchBooksFromDatabase";

const BookTitlesList: React.FC = () => {
  useFetchBooksFromDatabase();
  const navigate = useNavigate();
  const filteredBookTitles = useSelector(
    (state: RootStoreState) => state.titleList
  );
  const handleBookClick = (bookName: string) => {
    navigate(`/${bookName}`);
    localStorage.setItem("currentBook", bookName);
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

export default BookTitlesList;
