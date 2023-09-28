import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootStoreState } from "../redux/store";
import { IBooks } from "../redux/librarySlice";
import { useFetchBookAndDictionaryFromDatabase } from "../hooks/useFetchDataFromDatabase";
import DisplayForSelectedBook from "../components/display-for-selected-book/DisplayForSelectedBook";


const SelectedBookContent = () => {
  type RouteParams = {
    bookTitle: string;
  };
  const languageRecorderInDB = useSelector((state: RootStoreState) => state.authorization.languageRecorderInDB)
  const fetchDataFromDB = useFetchBookAndDictionaryFromDatabase()
  if (languageRecorderInDB) {
    fetchDataFromDB()
  }
  const { bookTitle } = useParams() as RouteParams;
  const loadedBooks: IBooks = useSelector(
    (state: RootStoreState) => state.library.books
  );
  const book: string = loadedBooks[bookTitle];

  return (
    <>
      <DisplayForSelectedBook loadedBook={book} />
    </>
  );
};

export default SelectedBookContent;
