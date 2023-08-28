import { useEffect, useState } from "react";

interface IBooks {
  [key: string]: string;
}
const DropDownList: React.FC = () => {
  const [books, setBooks] = useState<IBooks>({});
  const [selectedBook, setSelectedBook] = useState<string>("");

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
    setSelectedBook(books[bookName]);
    console.log(books[bookName]);
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
