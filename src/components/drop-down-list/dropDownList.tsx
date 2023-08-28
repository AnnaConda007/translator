import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SET_SELECTED_BOOK } from "../../redux/bookReduser";
interface IBooks {
  [key: string]: string;
}
const DropDownList: React.FC = () => {
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
    <div>
      <ul>
        {Object.keys(books).map((bookName) => (
          <li key={bookName} onClick={() => handleBookClick(bookName)}>
            {bookName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDownList;
