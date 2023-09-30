import { useParams } from "react-router-dom";
import { AppDispatch } from '../redux/store';
import DisplayForSelectedBook from "../components/display-for-selected-book/DisplayForSelectedBook";
import { fetchAndSetSelectedText } from '../utils/fetchAndSetSelectedBook';
import { useDispatch } from 'react-redux';
import { LoadedBookData } from '../enums/bookEnum';
import { determineCurrentPage } from '../utils/determineCurrentPage';

type RouteParams = {
  bookTitle: string;
};

const SelectedBookContent = () => {
  const dispatch: AppDispatch = useDispatch()
  const { bookTitle } = useParams() as RouteParams;
  dispatch(fetchAndSetSelectedText(bookTitle))
  const currentPage = determineCurrentPage(bookTitle)
  localStorage.setItem(LoadedBookData.CURRENT_TITLE_BOOK, bookTitle);
   return (
    <>
      <DisplayForSelectedBook currentPage={currentPage} />
    </>
  );
};

export default SelectedBookContent;
