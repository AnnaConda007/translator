import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootStoreState } from "../../../redux/store";
import { List, ListItem, ListItemText, Divider } from "@mui/material";
 import { LoadedBookData } from '../../../enums/bookEnum';
const BookTitlesList: React.FC = () => {
   const navigate = useNavigate();
  const filteredBookTitles = useSelector(
    (state: RootStoreState) => state.library.titlesBook
  );
  const handleBookClick = (bookName: string) => {
    navigate(`/${bookName}`);
    localStorage.setItem(LoadedBookData.CURRENT_TITLE_BOOK, bookName);
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
