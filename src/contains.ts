import { DataBasePoints } from "./enums/dataBasePointsEnum";

// Адреса для обращения к базе данных
export const dataBaseURL = "https://books-31eba-default-rtdb.firebaseio.com/";
export const dataBaseURL_books = `${dataBaseURL}${DataBasePoints.LIBRARY}/.json`;
export const addNewBook_libraryURL = (titleBook: string) => {
  return `${dataBaseURL}${DataBasePoints.LIBRARY}/${titleBook}/.json`;
};
export const generateUserDatabaseURL_point = ({
  userFairbaseId,
  dbPoint,
  wordToDelete,
}: {
  userFairbaseId: string;
  dbPoint: string;
  wordToDelete?: string;
}) => {
  return `${dataBaseURL}${userFairbaseId}/${dbPoint}${
    wordToDelete ? `/${wordToDelete}` : ""
  }/.json`;
};

// Адрес сервера
export const serverUrl = "https://translator-vzvr.onrender.com";

// Адрес контактной почты
export const contactAppMail = "annahrulkova@yandex.ru";

// Переменные для flachCards
export const amountOfTestCard = 10;
export const amountAnswerOption = 4;
export const stepToChangeTestType = 5;

export const languages: Array<{ [key: string]: string }> = [
  { английский: "en" },
  { грузинский: "ka" },
  { испанский: "es" },
  { итальянский: "it" },
  { немецкий: "de" },
  { французский: "fr" },
  { украинский: "uk" },
  { турецкий: "tr" },
  { корейский: "ko" },
];

export const breakpoints = {
  mobile: 450,
  tablet: 750,
  desktop: 1024,
};
