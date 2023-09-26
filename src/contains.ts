import { DataBasePoints } from './components/enum';

// адреса для обращения к базе данных
export const userFairbaseId = localStorage.getItem("userFairbaseId")
export const dataBaseURL = "https://books-31eba-default-rtdb.firebaseio.com/";
export const dataBaseURL_books = `${dataBaseURL}${DataBasePoints.LIBRARY}/.json`;
export const addNewBook_libraryURL = (titleBook: string) => {
  return `${dataBaseURL}${DataBasePoints.LIBRARY}/${titleBook}/.json`
};
export const generateUserDatabaseURL_point = (point: string, wordToDelete?: string) => {
  return `${dataBaseURL}${userFairbaseId}/${point}${wordToDelete ? `/${wordToDelete}` : ''}/.json`;
};

// адрес сервера
export const serverUrl = "http://localhost:3000";

// переменные для flachCards
export const amountOfTestCard = 2;
export const amountAnswerOption = 4;
export const stepToChangeTestType
  = 2;

