import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useFetchBooksFromDatabase from "../hooks/useFetchBooksFromDatabase";
import { paginateText } from "../utils/paginateText";
const SelectedBookConten = () => {
  useFetchBooksFromDatabase();
  const { bookTitle } = useParams();
  const loadedBooks = useSelector((state) => state.books);
  const book = loadedBooks[bookTitle];
  const [pageArr, setPageArr] = useState([]);
  const [currentPagenum, setCurrentPagenum] = useState(0);
  const [page, setPage] = useState("");

  useEffect(() => {
    if (book) {
      const pages = paginateText(book);
      setPageArr(pages);
    }
  }, [book]);

  useEffect(() => {
    setPage(pageArr[currentPagenum]);
  }, [pageArr, currentPagenum]);

  return (
    <div>
      <div>
        <article>{page}</article>
      </div>
      <div>
        <button onClick={() => setCurrentPagenum(currentPagenum - 1)}>
          назад
        </button>
        <button onClick={() => setCurrentPagenum(currentPagenum + 1)}>
          вперед
        </button>
      </div>
    </div>
  );
};

export default SelectedBookConten;
