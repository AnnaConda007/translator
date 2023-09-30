import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootStoreState } from "../../../redux/store";
import { List, ListItem, ListItemText, Divider } from "@mui/material";
import { LoadedBookData } from '../../../enums/bookEnum';

const TitlesList: React.FC = () => {
  const navigate = useNavigate();
  const filteredBookTitles = useSelector(
    (state: RootStoreState) => state.library.filteredTitles
  );
  const handleBookClick = (bookName: string) => {
    navigate(`/${bookName}`);
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

export default TitlesList;
