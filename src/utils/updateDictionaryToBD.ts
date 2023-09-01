import { dataBaseURL } from "../contains";
import { TypeAction } from "../components/enum";
import { IEntry } from "../redux/dictionarySlice";

export const updateDictionaryToBD = async (
  dictionaryEntry: IEntry,
  actionType: TypeAction
) => {
  const url = `${dataBaseURL}/dictionary/.json`;
  try {
    if (actionType === TypeAction.ADD) {
      await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dictionaryEntry),
      });
    } else {
      const key = Object.keys(dictionaryEntry)[0];
      const url = `${dataBaseURL}/dictionary/${key}.json`;
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
