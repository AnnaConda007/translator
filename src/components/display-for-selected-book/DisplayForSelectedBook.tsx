import { useState, useEffect } from "react";
import { paginateText } from "../../utils/paginateText";
import TextSelectedBook from './Text-selected-book/TextSelectedBook';
import PaginateButton from "./paginate-button/PaginateButton";
import { ButtonPaginnationDirection } from "../../enums/paginnationDirectionEnum";
import { useSelector } from 'react-redux';
import { RootStoreState } from '../../redux/store';
import { Box } from '@mui/material';
import styles from "./DisplayForSelectedBook.module.css"

interface DisplayForSelectedBookProps {
  currentPage: number
}
const DisplayForSelectedBook: React.FC<DisplayForSelectedBookProps> = ({ currentPage }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [maxLinesPerPage, setMaxLinesPerPage] = useState(10);
  const [maxCharsPerLine, setMaxCharsPerLine] = useState(40);

  const bookText = useSelector((state: RootStoreState) => state.library.selectedBookText)
  const [bookPages, setBookPages] = useState<string[]>([]);
  const [currentPageNumber, setCurrentPageNumber] = useState<number>(currentPage);
  const [currentPageText, setCurrentPageText] = useState<string>("");

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Очищаем обработчик событий при выходе из компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
    if (windowWidth <= 480) {
      // Условия для мобильных телефонов
      setMaxLinesPerPage(12);
      setMaxCharsPerLine(25);
      console.log("480")
    } else if (windowWidth <= 768) {
      // Условия для планшетов
      setMaxLinesPerPage(20);
      setMaxCharsPerLine(50);
      console.log("768")
    } else {
      // Условия для настольных компьютеров
      setMaxLinesPerPage(18);
      setMaxCharsPerLine(100);
      console.log("большой")
    }
  }, [windowWidth]);
  useEffect(() => {
    if (!bookText) return;
    const pages: string[] = paginateText(bookText, maxLinesPerPage, maxCharsPerLine);
    setBookPages(pages);
  }, [bookText, maxLinesPerPage, maxCharsPerLine]);


  useEffect(() => {
    if (!bookPages.length) return;
    setCurrentPageText(bookPages[currentPageNumber - 1]);
  }, [bookPages, currentPageNumber]);
  if (!bookText) {
    return ("load")
  }
  return (
    <Box className={styles.Box} >
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
    </Box>
  );
};

export default DisplayForSelectedBook;
