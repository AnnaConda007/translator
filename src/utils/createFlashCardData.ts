import { randomForeignWords } from "./shuffleArr";
import { IEntry } from "../redux/dictionarySlice";
import { IFlashCardData } from "../redux/testSlice";

export const createFlashCardData = (words: Array<IEntry>) => {
  const foreignWords: Array<string> = words.map((entry) => entry.foreignWord);
  const flashCardData: Array<IFlashCardData> = words.map((entry) => {
    return {
      russianWord: entry.russianWord,
      answerOptionsInForeign: randomForeignWords(
        foreignWords,
        entry.foreignWord,
      ),
      foreignWord: entry.foreignWord,
    };
  });
  return flashCardData;
};
