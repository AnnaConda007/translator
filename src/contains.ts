import { DataBasePoints } from './enums/dataBasePointsEnum';

// адреса для обращения к базе данных
export const dataBaseURL = "https://books-31eba-default-rtdb.firebaseio.com/";
export const dataBaseURL_books = `${dataBaseURL}${DataBasePoints.LIBRARY}/.json`;
export const addNewBook_libraryURL = (titleBook: string) => {
  return `${dataBaseURL}${DataBasePoints.LIBRARY}/${titleBook}/.json`
};
export const generateUserDatabaseURL_point = ({ userFairbaseId, dbPoint, wordToDelete }: { userFairbaseId: string, dbPoint: string, wordToDelete?: string }) => {
  return `${dataBaseURL}${userFairbaseId}/${dbPoint}${wordToDelete ? `/${wordToDelete}` : ''}/.json`;
};

// адрес сервера
export const serverUrl = "http://localhost:3000";

// адрес контактной почты
export const contactAppMail = "annahrulkova@yandex.ru"

// переменные для flachCards
export const amountOfTestCard = 2;
export const amountAnswerOption = 4;
export const stepToChangeTestType
  = 2;

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
  