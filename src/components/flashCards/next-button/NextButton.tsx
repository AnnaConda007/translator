import Button from "@mui/material/Button";
import { useSelector, batch } from "react-redux";
import { RootStoreState } from "../../../redux/store";
import { useDispatch } from "react-redux";
import {
  setCurrentCards,
  resetActiveCardNumber,
  resetTestResult,
} from "../../../redux/testSlice";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import { shuffleArr } from "../../../utils/shuffleArr";

const NextButton: React.FC = () => {
  const dispatch = useDispatch();
  const currentCards = useSelector(
    (state: RootStoreState) => state.test.currentCards
  );

  const handleButton = async () => {
    const shuffledCards = shuffleArr(currentCards);
    batch(() => {
      dispatch(setCurrentCards(shuffledCards));
      dispatch(resetActiveCardNumber());
      dispatch(resetTestResult());
    });
  };

  return (
    <Button variant="contained" color="primary" onClick={handleButton}>
      <RestartAltOutlinedIcon />
    </Button>
  );
};

export default NextButton;
