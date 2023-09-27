import { ButtonPaginnationDirection } from "../../../enums/enum";
import { Button } from "@mui/material";
import { PAGINATE } from "../../../enums/enum";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

type PaginateButtonProps = {
  setCurrentPageNumber: (value: number) => void;
  buttonValue: string;
  ButtonPaginnationDirection: ButtonPaginnationDirection;
  currentPageNumber: number;
};

const PaginateButton: React.FC<PaginateButtonProps> = ({
  setCurrentPageNumber,
  buttonValue,
  ButtonPaginnationDirection,
  currentPageNumber,
}) => {
  const targetPageNumber: number =
    ButtonPaginnationDirection === ButtonPaginnationDirection.NEXT
      ? currentPageNumber + 1
      : currentPageNumber - 1;

  const handleButton = () => {
    setCurrentPageNumber(targetPageNumber);
    localStorage.setItem("currentPageNumber", targetPageNumber.toString());
  };

  return (
    <Button variant="contained" onClick={() => handleButton()}>
      {buttonValue === PAGINATE.NEXT ? (
        <ArrowForwardIosOutlinedIcon />
      ) : (
        <ArrowBackIosNewOutlinedIcon />
      )}
    </Button>
  );
};
export default PaginateButton;
