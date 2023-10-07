import { DataBasePoints } from "../enums/dataBasePointsEnum";
import { IDictionary } from "../redux/dictionarySlice";
import { ITestResult } from "../redux/testSlice";
interface IDictionaryToBD {
  [key: string]: {
    [DataBasePoints.FOREIGN_WORD_IN_DB]: string;
    [DataBasePoints.RUSSIAN_WORD_IN_DB]: string;
    [DataBasePoints.COUNTERCOUNTER_IN_DB]: number;
  } | null;
}

export const transformationObjToBD = (
  dictionary: IDictionary,
  testResults: Array<ITestResult>,
) => {
  const foreignWordsInDictionary = new Set(
    dictionary.words.map((word) => word.foreignWord),
  );

  const combiningCounterAndDictionary: IDictionaryToBD = {};
  testResults.forEach((testWord) => {
    if (!foreignWordsInDictionary.has(testWord.foreignWord)) {
      combiningCounterAndDictionary[testWord.foreignWord] = null;
    } else {
      const matchingWord = dictionary.words.find(
        (word) => word.foreignWord === testWord.foreignWord,
      );
      if (!matchingWord) return;
      combiningCounterAndDictionary[testWord.foreignWord] = {
        russianWord: matchingWord.russianWord,
        foreignWord: matchingWord.foreignWord,
        counter: dictionary.counters[matchingWord.foreignWord],
      };
    }
  });
  return combiningCounterAndDictionary;
};
