import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { IBooks } from "../redux/allLoadedBooksSlice";
import { setBooks } from "../redux/allLoadedBooksSlice";
import { setTitleList } from "../redux/listOfBookTitlesSlice";

const useFetchBooksFromDatabase = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const fetchBookList: Response | null = await fetch(
          `https://books-31eba-default-rtdb.firebaseio.com/books/.json`
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
  }, [dispatch]);
};

export default useFetchBooksFromDatabase;
