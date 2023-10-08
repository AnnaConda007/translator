import axios from "axios";
import { Dispatch } from "redux";
import { serverUrl } from "../contains";
import { UserData } from "../enums/authEnum";
import { setTitles } from "../redux/librarySlice";

export const getAndSetLibraryTitles = () => {
  return async (dispatch: Dispatch) => {
    const titles = await fetchLibrary();
    dispatch(setTitles(titles));
  };
};

const fetchLibrary = async () => {
  try {
    const userId: string | null = localStorage.getItem(UserData.USER_ID);
    const titleResponse = await axios.post(`${serverUrl}/getBookTitles`, {
      userId: userId,
    });
    return titleResponse.data.bookTitles;
  } catch (error) {
    console.error("Ошибка при получении названий книг из Яндекс.Диск", error);
    return [];
  }
};
