import InputSearchingByTitle from "./input-searching-by-title/InputSearchingByTitle";
import { Box } from '@mui/material';
import TitlesList from "./titles-list/TitlesList";
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootStoreState } from '../../redux/store';
import AddNewBookInput from '../add-new-book-Input/AddNewBookInput';

const Library: React.FC = () => {
  const clickedAddBookButton: boolean = useSelector((state: RootStoreState) => state.visibility.addNewBookInput)
  return (
    <><Box>
      <InputSearchingByTitle />
      <TitlesList />
    </Box>
      <Box>
        {clickedAddBookButton && (
          <AddNewBookInput />
        )}

      </Box>

    </>
  );
};

export default Library;
