import { useState, useEffect } from "react";
import { paginateText } from "../../utils/paginateText";
import TextSelectedBook from "./text-selected-book/TextSelectedBook";
import PaginateButton from "./paginate-button/PaginateButton";
import { ButtonDirection } from "../enum";

type DisplayForSelectedBookProps = {
  loadedBook: string;
};
const DisplayForSelectedBook: React.FC<DisplayForSelectedBookProps> = ({
  loadedBook,
}) => {
  const lastSavedPageFromlocalStorage: string | null =
    localStorage.getItem("currentPageNumber");
  const lastSavedBoorTitleFromlocalStorage: string | null =
    localStorage.getItem("currentBook");
  const lastSavedPage: number =
    lastSavedPageFromlocalStorage && lastSavedBoorTitleFromlocalStorage
      ? parseInt(lastSavedPageFromlocalStorage)
      : 0;
  const [bookPages, setBookPages] = useState<string[]>([]);
  const [currentPageNumber, setCurrentPageNumber] =
    useState<number>(lastSavedPage);
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
      <TextSelectedBook currentPageText={currentPageText}/>
      <div>
        <PaginateButton
          setCurrentPageNumber={setCurrentPageNumber}
          buttonValue={"back"}
          buttonDirection={ButtonDirection.BACK}
          currentPageNumber={currentPageNumber}
        />
        <span>
          {currentPageNumber}/{bookPages.length}
        </span>
        <PaginateButton
          setCurrentPageNumber={setCurrentPageNumber}
          buttonValue={"next"}
          buttonDirection={ButtonDirection.NEXT}
          currentPageNumber={currentPageNumber}
        />
      </div>
    </>
  );
};

export default DisplayForSelectedBook;
