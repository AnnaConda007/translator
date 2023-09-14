import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { setEnteredWord } from '../redux/testSlice';
import {
  increaseActiveCardNumber,
  setSelectedAnswerOption,
  setTestResult,
} from "../redux/testSlice";
import { updateCounter } from "../redux/dictionarySlice";
import { CountAction } from "../components/enum";
import { batch } from "react-redux";
import { useSelector } from 'react-redux';
import { RootStoreState } from '../redux/store';
import { amountOfTestCard } from '../contains';
import { setMistake } from '../redux/testSlice';
import useAddTestResult from './useAddTestResult';
import useCheckMatchAnswer from './checkMatchAnswer';
 export const useAnswerHandling  = () => {
  const activeCardNumber = useSelector(
    (state: RootStoreState) => state.test.activeCardNumber
  );
  const updateTestResult= useAddTestResult()
  const checkAnsver =useCheckMatchAnswer()
  const dispatch: AppDispatch = useDispatch();

  const changeState = (
    currentRussianWord: string,
    correctForeignAnswer: string,
    selectedTestAnswer: string
  ) => {
    dispatch(setSelectedAnswerOption(selectedTestAnswer));
    dispatch(increaseActiveCardNumber());
     updateTestResult()
  };

  ;

  const handleRadio = (
    selectedTestAnswer: string,
    correctForeignAnswer: string,
    currentRussianWord: string
  ) => {
    if (activeCardNumber === amountOfTestCard) return;
    batch(() => {
      changeState(currentRussianWord, correctForeignAnswer, selectedTestAnswer);
      checkAnsver()
    });
  };

  return handleRadio
};

export default useAnswerHandling 