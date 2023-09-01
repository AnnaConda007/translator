import { ButtonDirection } from "../../enum";
import { Button } from "@mui/material";

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
      {buttonValue}
    </Button>
  );
};
export default PaginateButton;
