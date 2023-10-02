



import axios from 'axios';
import { serverUrl } from '../contains';

export const addNewBookInLibrary = async (titleBook: string): Promise<boolean> => {
  try {
    const response = await axios.post(`${serverUrl}/deliteBook`, {
      bookTitle: titleBook,
    })
    console.log(response)
    return true
  } catch (error) {
    return false

  }

}