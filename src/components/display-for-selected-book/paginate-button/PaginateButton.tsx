import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { Button } from "@mui/material";
import { LoadedBookData } from "../../../enums/bookEnum";
import { ButtonPaginnationDirection } from "../../../enums/paginnationDirectionEnum";
type PaginateButtonProps = {
  setCurrentPageNumber: (value: number) => void;
  buttonValue: string;
  direction: ButtonPaginnationDirection;
  currentPageNumber: number;
};

const PaginateButton: React.FC<PaginateButtonProps> = ({
  setCurrentPageNumber,
  buttonValue,
  direction,
  currentPageNumber,
}) => {
  const targetPageNumber: number =
    direction === ButtonPaginnationDirection.NEXT
      ? currentPageNumber + 1
      : currentPageNumber - 1;

  const handleButton = () => {
    setCurrentPageNumber(targetPageNumber);
    localStorage.setItem(
      LoadedBookData.CURRENT_PAGE_NUMBER,
      targetPageNumber.toString(),
    );
  };

  return (
    <Button variant="contained" onClick={() => handleButton()}>
      {buttonValue === ButtonPaginnationDirection.NEXT ? (
        <ArrowForwardIosOutlinedIcon />
      ) : (
        <ArrowBackIosNewOutlinedIcon />
      )}
    </Button>
  );
};
export default PaginateButton;
