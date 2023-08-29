import { useState, useEffect } from "react";
import { paginateText } from "../../utils/paginateText";
import TextSelectedBook from "./Text-selected-book/TextSelectedBook";
type DisplayForSelectedBookProps = {
  loadedBook: string;
};
const DisplayForSelectedBook: React.FC<DisplayForSelectedBookProps> = ({
  loadedBook,
}) => {
  const [bookPages, setBookPages] = useState<string[]>([]);
  const [currentPageNumber, setСurrentPageNumber] = useState<number>(0);
  const [currentPageText, setCurrentPageText] = useState<string>("");

  useEffect(() => {
    if (!loadedBook) return;
    const pages: string[] = paginateText(loadedBook);
    setBookPages(pages);
  }, [loadedBook]);

  useEffect(() => {
    if (!bookPages.length) return;
    setCurrentPageText(bookPages[currentPageNumber]);
  }, [bookPages, currentPageNumber]);

  return (
    <>
      <TextSelectedBook currentPageText={currentPageText} />
      <div>
        <button onClick={() => setСurrentPageNumber(currentPageNumber - 1)}>
          назад
        </button>
        <button onClick={() => setСurrentPageNumber(currentPageNumber + 1)}>
          вперед
        </button>
      </div>
    </>
  );
};

export default DisplayForSelectedBook;
