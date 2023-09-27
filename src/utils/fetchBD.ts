import { generateUserDatabaseURL_point, dataBaseURL_books } from "../contains";
import { Dispatch } from "redux";
import { setDictionary } from "../redux/dictionarySlice";
import { setBooks } from "../redux/librarySlice";
import { IBooks } from "../redux/librarySlice";
import { setTitles } from "../redux/librarySlice";
import { dataFromBD } from "../redux/dictionarySlice";
import { DataBasePoints } from '../enums/enum';
import { batch } from 'react-redux';
import { setLanguage } from '../redux/languageSlice';
export const fetchAndSetDictionary = () => {
  return async (dispatch: Dispatch) => {
    try {
      const dictionaryAndLanguage = await fetchDictionary();
      const { dictionary, language } = dictionaryAndLanguage
      batch(() => {
        dispatch(setDictionary(dictionary));
        dispatch(setLanguage(language))

      })
    } catch (error) {
      console.error(error);
    }
  };
};

const fetchDictionary = async () => {
  const dictionaryUserURL = generateUserDatabaseURL_point(DataBasePoints.DICTIONARY)
  const response = await fetch(dictionaryUserURL);
  if (!response.ok) {
    throw new Error("Ошибка при запросе к БД");
  }
  const data = await response.json()
  const language: string = data[DataBasePoints.LANGUAGE]
  delete data.language;
  const dictionary: Array<dataFromBD> = Object.values(data) || []
  return { dictionary, language };
};

export const fetchAndSetLibrary = () => {
  return async (dispatch: Dispatch) => {
    try {
      const books = await fetchLibrary() || {};
      const titles = Object.keys(books);
      dispatch(setBooks(books));
      dispatch(setTitles(titles));
    } catch (error) {
      console.error(error);
    }
  };
};
const fetchLibrary = async () => {
  const response = await fetch(dataBaseURL_books);
  if (!response.ok) {
    throw new Error("Ошибка при запросе к БД");
  }
  const books: IBooks = await response.json();
  return books;
};
