import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootStoreState } from "../redux/store";
import { paginateText } from "../utils/paginateText";

export const usePaginate = (initialCurrentPage: number) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [maxLinesPerPage, setMaxLinesPerPage] = useState(10);
  const [maxCharsPerLine, setMaxCharsPerLine] = useState(40);
  const [currentPageNumber, setCurrentPageNumber] =
    useState<number>(initialCurrentPage);
  const [currentPageText, setCurrentPageText] = useState<string>("");
  const bookText = useSelector(
    (state: RootStoreState) => state.library.selectedBookText,
  );
  const [bookPages, setBookPages] = useState<string[]>([]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth <= 480) {
      setMaxLinesPerPage(13);
      setMaxCharsPerLine(30);
    } else if (windowWidth <= 768) {
      setMaxLinesPerPage(25);
      setMaxCharsPerLine(60);
    } else {
      setMaxLinesPerPage(18);
      setMaxCharsPerLine(90);
    }
  }, [windowWidth]);

  useEffect(() => {
    if (!bookText) return;
    const pages = paginateText(bookText, maxLinesPerPage, maxCharsPerLine);
    setBookPages(pages);
  }, [bookText, maxLinesPerPage, maxCharsPerLine]);

  useEffect(() => {
    if (!bookPages.length) return;
    setCurrentPageText(bookPages[currentPageNumber - 1]);
  }, [bookPages, currentPageNumber]);

  return {
    bookPages,
    currentPageText,
    setCurrentPageNumber,
    maxCharsPerLine,
    maxLinesPerPage,
    currentPageNumber,
  };
};
