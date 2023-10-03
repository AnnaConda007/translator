import { useState, useEffect } from "react";
import { paginateText } from "../../utils/paginateText";
import TextSelectedBook from './Text-selected-book/TextSelectedBook';
import PaginateButton from "./paginate-button/PaginateButton";
import { ButtonPaginnationDirection } from "../../enums/paginnationDirectionEnum";
import { useSelector } from 'react-redux';
import { RootStoreState } from '../../redux/store';

interface DisplayForSelectedBookProps {
  currentPage: number
}
const DisplayForSelectedBook: React.FC<DisplayForSelectedBookProps> = ({ currentPage }) => {
  const bookText = useSelector((state: RootStoreState) => state.library.selectedBookText)
  const [bookPages, setBookPages] = useState<string[]>([]);
  const [currentPageNumber, setCurrentPageNumber] = useState<number>(currentPage);
  const [currentPageText, setCurrentPageText] = useState<string>("");

  useEffect(() => {
    if (!bookText) return;
    const pages: string[] = paginateText(bookText);
    setBookPages(pages);
  }, [bookText]);

  useEffect(() => {
    if (!bookPages.length) return;
    setCurrentPageText(bookPages[currentPageNumber - 1]);
  }, [bookPages, currentPageNumber]);
  if (!bookText) {
    return ("load")
  }
  return (
    <>
      <TextSelectedBook currentPageText={currentPageText} />
      <div>
        {currentPageNumber > 1 && (
          <PaginateButton
            setCurrentPageNumber={setCurrentPageNumber}
            buttonValue={"back"}
            direction={ButtonPaginnationDirection.BACK}
            currentPageNumber={currentPageNumber}
          />
        )}
        <span>
          {currentPageNumber}/{bookPages.length}
        </span>
        {currentPageNumber <= bookPages.length - 1 && (<PaginateButton
          setCurrentPageNumber={setCurrentPageNumber}
          buttonValue={"next"}
          direction={ButtonPaginnationDirection.NEXT}
          currentPageNumber={currentPageNumber}
        />)}

      </div>
    </>
  );
};

export default DisplayForSelectedBook;
