import { useEffect, useState } from "react";
import { List, ListItem, ListItemText, Divider } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { SET_SELECTED_BOOK } from "../../redux/bookReduser";
interface IBooks {
  [key: string]: string;
}
const DropDownBookList: React.FC = () => {
  const dispatch = useDispatch();
  const [books, setBooks] = useState<IBooks>({});

  useEffect(() => {
    const getBooks = async (): Promise<void> => {
      try {
        const fetchBookList: Response | null = await fetch(
          `https://books-31eba-default-rtdb.firebaseio.com/books/.json`
        );
        if (!fetchBookList.ok) {
          throw new Error("Статус ответа при запросе к БД отличен от 'ок'");
        }
        const bookList: IBooks = await fetchBookList.json();
        setBooks(bookList);
      } catch (error) {
        console.error("Ошибка при получении данных с книгами");
      }
    };
    getBooks();
  }, []);

  const handleBookClick = (bookName: string) => {
    dispatch({
      type: SET_SELECTED_BOOK,
      payload: books[bookName],
    });
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

export default DropDownBookList;

 