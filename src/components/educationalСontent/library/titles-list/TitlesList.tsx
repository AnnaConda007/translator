import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Divider, IconButton, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deliteTitle } from "../../../../redux/librarySlice";
import { RootStoreState } from "../../../../redux/store";
import { addNewBookInLibrary } from "../../../../utils/updateData/deliteBook";
import { ListStyled, ListItemStyled, ListItemTextStyled } from "../../Styled";

const TitlesList: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const filteredBookTitles = useSelector(
    (state: RootStoreState) => state.library.filteredTitles,
  );
  const handleBookClick = (bookName: string) => {
    navigate(`/${bookName}`);
  };
  const handleDelite = async (e: React.MouseEvent, title: string) => {
    e.stopPropagation();
    await addNewBookInLibrary(title);
    dispatch(deliteTitle(title));
  };

  return (
    <>
      {!filteredBookTitles.length && (
        <Typography>Добавьте свою книгу</Typography>
      )}
      <ListStyled>
        {filteredBookTitles.map((bookName) => (
          <React.Fragment key={bookName}>
            <ListItemStyled onClick={() => handleBookClick(bookName)}>
              <ListItemTextStyled primary={bookName} />
              <IconButton onClick={(e) => handleDelite(e, bookName)}>
                <DeleteForeverIcon />
              </IconButton>
            </ListItemStyled>
            <Divider />
          </React.Fragment>
        ))}
      </ListStyled>
    </>
  );
};

export default TitlesList;
