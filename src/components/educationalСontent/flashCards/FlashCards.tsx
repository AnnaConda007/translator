import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { RootStoreState } from "../../../redux/store";
import CardWithResult from "./card-with-result/CardWithResult";
import { amountOfTestCard } from "../../../contains";
import { useEffect } from "react";
import { setCurrentCards } from "../../../redux/testSlice";
import { useDispatch } from "react-redux";
import { shuffleArr } from "../../../utils/shuffleArr";
import { IEntry } from "../../../redux/dictionarySlice";
import { IFlashCardData } from "../../../redux/testSlice";
import { createFlashCardData } from "../../../utils/createFlashCardData";
import CardIdentifier from './card-identifier/CardIdentifier';
import { StyledContentBox } from '../Styled';
import Backing from '../Backing';


export interface flashCardProp {
  flashCardData: Array<IFlashCardData>;
}

const FlashCards = () => {
  const dispatch = useDispatch();
  const activeCardNumber: number = useSelector(
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

  const amountOfCads = words.length > amountOfTestCard ? amountOfTestCard : words.length

  return (
    <Backing>
      <StyledContentBox>
        <Card sx={{ height: "100%", overflow:"auto" }}>
          <CardContent >
            <Typography gutterBottom variant="body1" component="div">
              {!currentCards.length && <p>нет слов для теста</p>}
              {activeCardNumber === amountOfCads ? (
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
      </StyledContentBox>
    </Backing>


  );
};

export default FlashCards;
