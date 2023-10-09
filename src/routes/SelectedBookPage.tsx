import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import DisplayForSelectedBook from "../components/display-for-selected-book/DisplayForSelectedBook";
import { LoadedBookData } from "../enums/bookEnum";
import { AppDispatch } from "../redux/store";
import { determineCurrentPage } from "../utils/determineCurrentPage";
import { getAndSetSelectedText } from "../utils/getAndSetSelectedBook"; 
import { PageContainer } from './routesStyled';

type RouteParams = {
  bookTitle: string;
};

const SelectedBookContent = () => {
  const dispatch: AppDispatch = useDispatch();
  const { bookTitle } = useParams() as RouteParams;
  dispatch(getAndSetSelectedText(bookTitle));
  const currentPage = determineCurrentPage(bookTitle);
  localStorage.setItem(LoadedBookData.CURRENT_TITLE_BOOK, bookTitle);
  return (
    <PageContainer>
      <DisplayForSelectedBook currentPage={currentPage} />
    </PageContainer>
  );
};

export default SelectedBookContent;
