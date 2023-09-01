import { dataBaseURL } from "../contains";
import { IEntry } from "../redux/dictionarySlice";

export const getDictionaryFromBD = async (dispatch, setDictionary): Promise<Array<IEntry> | void> => {
  const url = `${dataBaseURL}/dictionary/.json`;
  try {
    const reponse = await fetch(url, {
      method: "GET",
    });
    const data: Array<IEntry> = await reponse.json();
    const dictionary = Object.entries(data).map(([key, value]) => ({ [key]: value }));
     dispatch(setDictionary(dictionary))
  } catch (error) {
    console.error("Ошибка при получении словаря", error);
  }
};
