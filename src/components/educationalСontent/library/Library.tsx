import InputSearchingByTitle from "./input-searching-by-title/InputSearchingByTitle";
import { Box } from '@mui/material';
import TitlesList from "./titles-list/TitlesList";
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootStoreState } from '../../../redux/store';
import AddNewBookInput from '../../add-new-book-Input/AddNewBookInput';
import { StyledContentBox } from '../Styled';
import Backing from '../Backing';


const Library: React.FC = () => {
  const clickedAddBookButton: boolean = useSelector((state: RootStoreState) => state.visibility.addNewBookInput)
  return (
    <Backing>
      <StyledContentBox  >
        <Box>
          <InputSearchingByTitle />
          <TitlesList />
        </Box>
        <Box>
          {clickedAddBookButton && (
            <AddNewBookInput />
          )}
        </Box>
      </StyledContentBox>
    </Backing>

  );
};

export default Library;
