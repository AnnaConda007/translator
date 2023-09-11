import { dataBaseURL } from "../contains";
import { TypeAction } from "../components/enum"; 

interface updateDictionaryToBdArgs {
  russianWord: string;
  translatedWord: string;
  actionType: TypeAction;
}

export const updateDictionaryToBD = async ({
  russianWord = "",
  translatedWord,
  actionType,
}: updateDictionaryToBdArgs) => {
  const url = `${dataBaseURL}/dictionary/.json`;
  try {
    if (actionType === TypeAction.ADD) {
      const newEntryInDictionary = {
        [translatedWord]: {
          translatedWord,
          russianWord,
          counter: 0,
        },
      };
      await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEntryInDictionary),
      });
    } else {
      const url = `${dataBaseURL}/dictionary/${translatedWord}.json`;
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
