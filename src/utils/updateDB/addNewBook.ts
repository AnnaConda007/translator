import axios from 'axios';
import { serverUrl } from '../../contains';

export const addNewBookInLibrary = async (titleBook: string, bookContent: string): Promise<boolean> => {
  try {
    const response = await axios.post(`${serverUrl}/uploadBook`, {
      text: bookContent,
      bookTitle: titleBook,
    })
    return true
  } catch (error) {
    return false

  }

}