import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { IBooks } from "../redux/allLoadedBooksSlice";
import { setBooks } from "../redux/allLoadedBooksSlice";
import { setTitleList } from "../redux/listOfBookTitlesSlice";
import { useSelector } from "react-redux";
import { RootStoreState } from "../redux/store";
import { dataBaseURL } from '../contains';
const useFetchBooksFromDatabase = () => {
  const dispatch = useDispatch();
  const loadedBooks: IBooks = useSelector(
    (state: RootStoreState) => state.books
  );
  useEffect(() => {
    if (Object.keys(loadedBooks).length == 0) {
      const fetchBooks = async () => {
        try {
          const fetchBookList: Response | null = await fetch(
            `${dataBaseURL}books/.json`
          );
          if (!fetchBookList.ok) {
            throw new Error("Статус ответа при запросе к БД отличен от 'ок'");
          }
          const bookList: IBooks = await fetchBookList.json();
          dispatch(setBooks(bookList));
          dispatch(setTitleList(Object.keys(bookList)));
        } catch (error) {
          console.error("Ошибка при получении данных с книгами");
        }
      };

      fetchBooks();
    }
  }, [dispatch, loadedBooks]);
};

export default useFetchBooksFromDatabase;
