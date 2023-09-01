import { dataBaseURL } from "../contains";
import { IEntry } from "../redux/dictionarySlice";
import { Dispatch , Action } from 'redux';

type SetDictionaryAction = (dictionary: IEntry[]) => { type: string, payload: IEntry[] };

 
export const getDictionaryFromBD = async (dispatch:Dispatch<Action >, setDictionary:SetDictionaryAction): Promise<Array<IEntry> | void> => {
  const url = `${dataBaseURL}/dictionary/.json`;
  try {
    const reponse = await fetch(url, {
      method: "GET",
    });
    const data:  { [key: string]: string }   = await reponse.json();
    const dictionary: Array<IEntry> = Object.entries(data).map(([key, value]) => ({ [key]: value }));
     dispatch(setDictionary(dictionary))
  } catch (error) {
    console.error("Ошибка при получении словаря", error);
  }
};
