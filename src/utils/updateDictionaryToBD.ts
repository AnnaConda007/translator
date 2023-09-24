import { dictionary_dataBaseURL } from "../contains";
import { TypeAction } from "../components/enum";
import { dataFromBD } from "../redux/dictionarySlice";
interface add_deliteWordInBDArgs {
  russianWord: string;
  foreignWord: string;
  actionType: TypeAction;
}

export const add_deliteWordInBD = async ({
  russianWord = "",
  foreignWord,
  actionType,
}: add_deliteWordInBDArgs) => {
  try {
    if (actionType === TypeAction.ADD) {
      const newEntryInDictionary = {
        [foreignWord]: {
          foreignWord,
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
      const url = `${dictionary_dataBaseURL}${foreignWord}.json`;
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
    foreignWord: string;
  } | null;
}

export const updateDictionaryInBD = async (dictionaryEntries: {
  [key: string]: dataFromBD | null;
}) => {
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
