
import axios from 'axios';
import { serverUrl } from '../contains';
import { Dispatch } from "redux";
import { setTitles } from '../redux/librarySlice';




export const fetchAndSetLibraryTitles = () => {
  return async (dispatch: Dispatch) => {
    const titles = await fetchLibrary();
    dispatch(setTitles(titles));
  };
};


const fetchLibrary = async () => {
  try {
    const titleResponse = await axios.post(`${serverUrl}/getBookTitles`);
    return titleResponse.data.bookTitles
  } catch (error) {
    console.error("Ошибка при получении названий книг из Яндекс.Диск", error)
    return []
  }
};
