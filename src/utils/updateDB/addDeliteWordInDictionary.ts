import { generateUserDatabaseURL_point } from '../../contains';
import { TypeActionWordDictionary } from '../../enums/enum';
import { DataBasePoints } from '../../enums/enum';

interface addDeliteWordInBDArgs {
  russianWord?: string;
  foreignWord: string;
  actionType: TypeActionWordDictionary;
}

export const addDeliteWordInBD = async ({
  russianWord,
  foreignWord,
  actionType,
}: addDeliteWordInBDArgs) => {
  try {
    if (actionType === TypeActionWordDictionary.ADD) {
      const dictionaryUserURL = generateUserDatabaseURL_point(DataBasePoints.DICTIONARY)
      const newEntryInDictionary = {
        [foreignWord]: {
          [DataBasePoints.FOREIGN_WORD_IN_DB]: foreignWord,
          [DataBasePoints.RUSSIAN_WORD_IN_DB]: russianWord,
          [DataBasePoints.COUNTERCOUNTER_IN_DB]: 0,
        },
      };
      const response = await fetch(dictionaryUserURL, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEntryInDictionary),
      });
      return response;
    } else {
      const wordInDictionaryUserURL = generateUserDatabaseURL_point(DataBasePoints.DICTIONARY, foreignWord)
      await fetch(wordInDictionaryUserURL, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  } catch (error) {
    console.error("Ошибка при обновлении словаря", error);
  }
};
