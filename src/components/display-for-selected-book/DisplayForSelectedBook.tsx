import { FC, useState, useEffect } from "react";
import { paginateText } from "../../utils/paginateText";
type DisplayForSelectedBookProps = {
  loadedBook: string;
};
const DisplayForSelectedBook: FC<DisplayForSelectedBookProps> = ({
  loadedBook,
}) => {
  const [bookPages, setBookPages] = useState<string[]>([]);
  const [currentPageNumber, setСurrentPageNumber] = useState<number>(0);
  const [currentPageText, setCurrentPageText] = useState<string>("");

  useEffect(() => {
    if (!loadedBook) return;
    console.log(1);
    const pages: string[] = paginateText(loadedBook);
    setBookPages(pages);
  }, [loadedBook]);

  useEffect(() => {
    if (!bookPages.length) return;
    setCurrentPageText(bookPages[currentPageNumber]);
    console.log(2);
  }, [bookPages, currentPageNumber]);
 

  return (
    <div>
         {currentPageText.split("\n").map((paragraph, idx1) => (
        <span key={idx1}>
          {paragraph.split(/\s+/).map((word, idx2) => (
            <span
              key={idx2}
              onClick={() => console.log(word)}
              style={{ cursor: "pointer", marginRight: "5px" }}
            >
              {word}
              &nbsp;
            </span>
          ))}
          <br />
        </span>
      ))}
      <div> 
      </div>
      <div>
        <button onClick={() => setСurrentPageNumber(currentPageNumber - 1)}>
          назад
        </button>
        <button onClick={() => setСurrentPageNumber(currentPageNumber + 1)}>
          вперед
        </button>
      </div>
    </div>
  );
};

export default DisplayForSelectedBook;
