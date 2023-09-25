import InputSearchingByBookTitle from "./input-searching-by-book-title/inputSearchingByBookTitle";
import { Box } from '@mui/material';
import BookTitlesList from "./book-titles-list/bookTitlesList";
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootStoreState } from '../../redux/store';
import AddNewBookInput from '../add-new-book-Input/AddNewBookInput';

const BooksLibrary: React.FC = () => {
  const clickedAddBookButton: boolean = useSelector((state: RootStoreState) => state.visibility.addNewBookInput)
  return (
    <><Box>
      <InputSearchingByBookTitle />
      <BookTitlesList />
    </Box>
      <Box>
        {clickedAddBookButton && (
        <AddNewBookInput/>
        )}

      </Box>

    </>
  );
};

export default BooksLibrary;
