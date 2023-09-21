import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { RootStoreState } from "../../redux/store";
import CardWithResult from "./card-with-result/CardWithResult";
import { amountOfTestCard } from "../../contains";
import { useEffect } from "react";
import { setCurrentCards } from "../../redux/testSlice";
import { useDispatch } from "react-redux";
import { shuffleArr } from "../../utils/shuffleArr";
import { IEntry } from "../../redux/dictionarySlice";
import { IFlashCardData } from "../../redux/testSlice";
import { createFlashCardData } from "../../utils/createFlashCardData";
import CardIdentifier from "./card-identifier/CardIdentifier";

export interface flashCardProp {
  flashCardData: Array<IFlashCardData>;
}

const FlashCards = () => {
  const dispatch = useDispatch();
  const activeCardNumber = useSelector(
    (state: RootStoreState) => state.test.activeCardNumber
  );
  const currentCards = useSelector(
    (state: RootStoreState) => state.test.currentCards
  );
  const words: Array<IEntry> = useSelector(
    (state: RootStoreState) => state.dictionary.words
  );

  useEffect(() => {
    const flashCardData = createFlashCardData(words);
    dispatch(setCurrentCards(shuffleArr(flashCardData)));
  }, [words, dispatch]);
  if (!currentCards.length) return null;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {activeCardNumber === amountOfTestCard ? (
            <CardWithResult />
          ) : (
            <CardIdentifier
              activeCardNumber={activeCardNumber}
              currentCards={currentCards}
            />
          )}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FlashCards;
