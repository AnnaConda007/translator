import { dictionary_dataBaseURL } from "../contains";
import { TypeAction } from "../components/enum";
 
interface addNewWordInBDArgs {
  russianWord: string;
  translatedWord: string;
  actionType: TypeAction;
}

export const addNewWordInBD = async ({
  russianWord = "",
  translatedWord,
  actionType,
}: addNewWordInBDArgs) => { 
  try {
    if (actionType === TypeAction.ADD) {
      const newEntryInDictionary = {
        [translatedWord]: {
          translatedWord,
          russianWord,
          counter: 0,
        },
      };
      const response = await fetch(dictionary_dataBaseURL, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEntryInDictionary),
      });
      return response;
    } else {
      const url = `${dictionary_dataBaseURL}${translatedWord}.json`;
      await fetch(url, {
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

export interface IDataToUpdateDictionaryBD {
  [key: string]: {
    counter: number;
    russianWord: string;
    translatedWord: string;
  };
}

export const updateDictionaryInBD = async (dictionaryEntries: IDataToUpdateDictionaryBD) => {
  try {
    await fetch(dictionary_dataBaseURL, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dictionaryEntries),
    });
  } catch (error) {
    console.error(error);
  }
};
