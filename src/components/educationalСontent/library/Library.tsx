import { Box } from "@mui/material";
import { useSelector } from "react-redux/es/hooks/useSelector";
import InputSearchingByTitle from "./input-searching-by-title/InputSearchingByTitle";
import TitlesList from "./titles-list/TitlesList";
import { RootStoreState } from "../../../redux/store";
import AddNewBookInput from "../../add-new-book-Input/AddNewBookInput";
import Backing from "../Backing";
import { StyledContentBox } from "../Styled";

const Library: React.FC = () => {
  const clickedAddBookButton: boolean = useSelector(
    (state: RootStoreState) => state.visibility.addNewBookInput,
  );
  return (
    <Backing>
      <StyledContentBox>
        <Box>
          <InputSearchingByTitle />
          <TitlesList />
        </Box>
        <Box>{clickedAddBookButton && <AddNewBookInput />}</Box>
      </StyledContentBox>
    </Backing>
  );
};

export default Library;
