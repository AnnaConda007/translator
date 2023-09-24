import { ButtonDirection } from "../../enum";
import { Button } from "@mui/material";
import { PAGINATE } from "../../enum";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

type PaginateButtonProps = {
  setCurrentPageNumber: (value: number) => void;
  buttonValue: string;
  buttonDirection: ButtonDirection;
  currentPageNumber: number;
};

const PaginateButton: React.FC<PaginateButtonProps> = ({
  setCurrentPageNumber,
  buttonValue,
  buttonDirection,
  currentPageNumber,
}) => {
  const targetPageNumber: number =
    buttonDirection === ButtonDirection.NEXT
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
