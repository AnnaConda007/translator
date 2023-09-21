import { IDictionary, dataFromBD, IEntry } from "../redux/dictionarySlice";
import { ITestResult } from "../redux/testSlice";
import { IDataToUpdateDictionaryBD } from "./updateDictionaryToBD";
export const transformationObjToBD = (
  dictionary: IDictionary,
  testResults: Array<ITestResult>
) => {
  const combiningCounterDictionary: Array<dataFromBD> = dictionary.words.map(
    (word) => {
      return {
        russianWord: word.russianWord,
        foreignWord: word.foreignWord,
        counter: dictionary.counters[word.foreignWord],
      };
    }
  );

  const matchedDictionaryEntries = combiningCounterDictionary.filter(
    (dictionaryEntry: IEntry) =>
      testResults.some(
        (testResult: ITestResult) =>
          testResult.foreignWord === dictionaryEntry.foreignWord
      )
  );

  const entriesObject: IDataToUpdateDictionaryBD =
    matchedDictionaryEntries.reduce(
      (acc: IDataToUpdateDictionaryBD, currentEntry: dataFromBD) => {
        acc[currentEntry.foreignWord] = currentEntry;
        return acc;
      },
      {}
    );
  return entriesObject;
};
