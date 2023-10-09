import { useEffect } from "react";
import {Card,   Typography, CardContent} from "@mui/material/"; 
import { useSelector,useDispatch } from "react-redux"; 
import CardIdentifier from "./card-identifier/CardIdentifier";
import CardWithResult from "./card-with-result/CardWithResult";
import { amountOfTestCard } from "../../../contains";
import { IEntry } from "../../../redux/dictionarySlice";
import { RootStoreState } from "../../../redux/store";
import { setCurrentCards,IFlashCardData } from "../../../redux/testSlice"; 
import { createFlashCardData } from "../../../utils/createFlashCardData";
import { shuffleArr } from "../../../utils/shuffleArr";
import Instructions from "../../instructions/Instructions";  
 import ContentConteiner from '../content-conteiner/ContentConteiner';
 
export interface flashCardProp {
  flashCardData: Array<IFlashCardData>;
}

const FlashCards = () => {
  const dispatch = useDispatch();
  const activeCardNumber: number = useSelector(
    (state: RootStoreState) => state.test.activeCardNumber,
  );
  const currentCards = useSelector(
    (state: RootStoreState) => state.test.currentCards,
  );
  const words: Array<IEntry> = useSelector(
    (state: RootStoreState) => state.dictionary.words,
  );

  useEffect(() => {
    const flashCardData = createFlashCardData(words);
    dispatch(setCurrentCards(shuffleArr(flashCardData)));
  }, [words, dispatch]);

  const amountOfCads =
    words.length > amountOfTestCard ? amountOfTestCard : words.length;

  return ( 
      <ContentConteiner >
      <Card sx={{height:"70%", width:"250px"}} >
          <CardContent  >
            <Typography gutterBottom variant="body1" component="div">
              {!currentCards.length && <Instructions />}
              {amountOfCads !== 0 && activeCardNumber === amountOfCads ? (
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
      </ContentConteiner>
   
  );
};

export default FlashCards;
