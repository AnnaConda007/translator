import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootStoreState } from "../../../../redux/store";
import { List, ListItem, ListItemText, Divider, IconButton, Typography } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { addNewBookInLibrary } from '../../../../utils/updateData/deliteBook';
import { deliteTitle } from '../../../../redux/librarySlice';
const TitlesList: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const filteredBookTitles = useSelector(
    (state: RootStoreState) => state.library.filteredTitles
  );
  const handleBookClick = (bookName: string) => {
    navigate(`/${bookName}`);
  };
  const handleDelite = async (e: React.MouseEvent, title: string) => {
    e.stopPropagation();
    await addNewBookInLibrary(title)
    dispatch(deliteTitle(title))
  }

  return (
    <>
      {!filteredBookTitles.length && (
        <Typography>
          Добавьте свою книгу
        </Typography>
      )}
      <List>
        {filteredBookTitles.map((bookName) => (
          <React.Fragment key={bookName}>
            <ListItem onClick={() => handleBookClick(bookName)}>
              <ListItemText primary={bookName} />
              <IconButton onClick={(e) => handleDelite(e, bookName)} ><DeleteForeverIcon /></IconButton>

            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </>

  );
};

export default TitlesList;
