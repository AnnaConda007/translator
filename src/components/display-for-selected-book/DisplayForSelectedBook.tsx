import { useState, useEffect } from "react";
import { paginateText } from "../../utils/paginateText";
import TextSelectedBook from './Text-selected-book/TextSelectedBook';
import PaginateButton from "./paginate-button/PaginateButton";
import { ButtonPaginnationDirection } from "../../enums/paginnationDirectionEnum";
import { LoadedBookData } from '../../enums/bookEnum';
import { useFetchBookAndDictionaryFromDatabase } from '../../hooks/useFetchDataFromDatabase';

type DisplayForSelectedBookProps = {
  loadedBook: string;
};
const DisplayForSelectedBook: React.FC<DisplayForSelectedBookProps> = ({
  loadedBook,
}) => {
  useFetchBookAndDictionaryFromDatabase()
  const lastSavedPageFromlocalStorage: string | null =
    localStorage.getItem(LoadedBookData.CURRENT_PAGE_NUMBER);
  const lastSavedBookTitleFromlocalStorage: string | null =
    localStorage.getItem(LoadedBookData.CURRENT_TITLE_BOOK);
  const lastSavedPage: number =
    lastSavedPageFromlocalStorage && lastSavedBookTitleFromlocalStorage
      ? parseInt(lastSavedPageFromlocalStorage)
      : 1;
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
    setCurrentPageText(bookPages[currentPageNumber - 1]);
  }, [bookPages, currentPageNumber]);
  return (
    <>
      <TextSelectedBook currentPageText={currentPageText} />
      <div>
        <PaginateButton
          setCurrentPageNumber={setCurrentPageNumber}
          buttonValue={"back"}
          direction={ButtonPaginnationDirection.BACK}
          currentPageNumber={currentPageNumber}
        />
        <span>
          {currentPageNumber}/{bookPages.length}
        </span>
        <PaginateButton
          setCurrentPageNumber={setCurrentPageNumber}
          buttonValue={"next"}
          direction={ButtonPaginnationDirection.NEXT}
          currentPageNumber={currentPageNumber}
        />
      </div>
    </>
  );
};

export default DisplayForSelectedBook;
