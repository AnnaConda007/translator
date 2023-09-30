import { Dispatch } from 'redux';
import axios from 'axios';
import { serverUrl } from '../contains';
import { setSelectedBookText } from '../redux/librarySlice';

export const fetchAndSetSelectedText = (titleBook: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(setSelectedBookText(""))
    const text = await fetchSelectedBook(titleBook);
    dispatch(setSelectedBookText(text))
  };
};


const fetchSelectedBook = async (titleBook: string) => {
  try {
    const booksText = await axios.post(`${serverUrl}/getBookText`, {
      titleBook: titleBook
    })
    return booksText.data.content
  } catch (error) {
    console.error("Ошибка при получении текста из Яндекс.Диск", error)
    return []
  }
};
