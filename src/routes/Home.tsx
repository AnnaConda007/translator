import BookList from "../components/book-list/bookList";
import InputSearchingByBookTitle from '../components/input-searching-by-book-title/inputSearchingByBookTitle';
const Home: React.FC = () => {
  return (
    <>
    <InputSearchingByBookTitle/>
      <BookList />
      
    </>
  );
};

export default Home;
