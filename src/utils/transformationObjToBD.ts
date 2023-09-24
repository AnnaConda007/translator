import { IDictionary } from "../redux/dictionarySlice";
import { ITestResult } from "../redux/testSlice";
import { IDataToUpdateDictionaryBD } from "./updateDictionaryToBD";

export const transformationObjToBD = (
  dictionary: IDictionary,
  testResults: Array<ITestResult>
) => {
  const foreignWordsInDictionary = new Set(
    dictionary.words.map((word) => word.foreignWord)
  );

  const combiningCounterAndDictionary: IDataToUpdateDictionaryBD = {};
  testResults.forEach((testWord) => {
    if (!foreignWordsInDictionary.has(testWord.foreignWord)) {
      combiningCounterAndDictionary[testWord.foreignWord] = null;
    } else {
      const matchingWord = dictionary.words.find(
        (word) => word.foreignWord === testWord.foreignWord
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
