import InputSearchingByBookTitle from "./input-searching-by-book-title/inputSearchingByBookTitle";
import BookTitlesList from "./book-titles-list/bookTitlesList";

const BooksLibrary: React.FC = () => {
  return (
    <>
      <InputSearchingByBookTitle />
      <BookTitlesList />
    </>
  );
};

export default BooksLibrary;
