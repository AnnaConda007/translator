import { generateUserDatabaseURL_point } from '../../contains';
import { TypeActionWordDictionary } from '../../enums/dictionaryEnum';
import { DataBasePoints } from '../../enums/dataBasePointsEnum';
import { UserData } from '../../enums/authEnum';
interface add_DeliteWordInBDArgs {
  russianWord?: string;
  foreignWord: string;
  actionType: TypeActionWordDictionary;
}

export const add_DeliteWordInBD = async ({
  russianWord,
  foreignWord,
  actionType,
}: add_DeliteWordInBDArgs) => {
  const userFairbaseId = localStorage.getItem(UserData.USER_ID)
  if (!userFairbaseId) return
  try {
    if (actionType === TypeActionWordDictionary.ADD) {
      const dictionaryUserURL = generateUserDatabaseURL_point({ userFairbaseId, dbPoint: DataBasePoints.DICTIONARY })
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
      const wordInDictionaryUserURL = generateUserDatabaseURL_point({ userFairbaseId, dbPoint: DataBasePoints.DICTIONARY, wordToDelete: foreignWord })
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
