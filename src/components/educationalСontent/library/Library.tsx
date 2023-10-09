import { Box } from "@mui/material";
import { useSelector } from "react-redux/es/hooks/useSelector";
import InputSearchingByTitle from "./input-searching-by-title/InputSearchingByTitle";
import TitlesList from "./titles-list/TitlesList";
import { RootStoreState } from "../../../redux/store";
import AddNewBookInput from "../../add-new-book-Input/AddNewBookInput";
import ContentConteiner from "../content-conteiner/ContentConteiner";

const Library: React.FC = () => {
  const clickedAddBookButton: boolean = useSelector(
    (state: RootStoreState) => state.visibility.addNewBookInput,
  );
  return (
    <ContentConteiner>
      <Box sx={{ width: "100%" }}>
        <InputSearchingByTitle />
        <TitlesList />
      </Box>
      {clickedAddBookButton && <AddNewBookInput />}
    </ContentConteiner>
  );
};

export default Library;
