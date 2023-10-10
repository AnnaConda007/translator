import { batch } from "react-redux";
import { Dispatch } from "redux";
import { generateUserDatabaseURL_point } from "../constants";
import { UserData } from "../enums/authEnum";
import { DataBasePoints } from "../enums/dataBasePointsEnum";
import { setDictionary } from "../redux/dictionarySlice";
import { dataFromBD } from "../redux/dictionarySlice";
import { setLanguage } from "../redux/languageSlice";

export const getAndSetDictionary = () => {
  const userFairbaseId = localStorage.getItem(UserData.USER_ID);
  return async (dispatch: Dispatch) => {
    if (!userFairbaseId) return;
    const dictionaryUserURL = generateUserDatabaseURL_point({
      userFairbaseId,
      dbPoint: DataBasePoints.DICTIONARY,
    });
    try {
      const dictionaryAndLanguage = await fetchDictionary(dictionaryUserURL);
      const { dictionary, language } = dictionaryAndLanguage;
      batch(() => {
        dispatch(setDictionary(dictionary));
        dispatch(setLanguage(language));
      });
    } catch (error) {
      console.error(error);
    }
  };
};
const fetchDictionary = async (dictionaryUserURL: string) => {
  const response = await fetch(dictionaryUserURL);
  if (!response.ok) {
    throw new Error("Ошибка при запросе к БД");
  }
  const data = await response.json();
  const language: string = data[DataBasePoints.LANGUAGE];
  delete data.language;
  const dictionary: Array<dataFromBD> = Object.values(data) || [];
  return { dictionary, language };
};
