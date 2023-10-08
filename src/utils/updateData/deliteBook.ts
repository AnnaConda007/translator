import axios from "axios";
import { serverUrl } from "../../contains";
import { UserData } from "../../enums/authEnum";

export const addNewBookInLibrary = async (
  titleBook: string,
): Promise<boolean> => {
  try {
    const userId: string | null = localStorage.getItem(UserData.USER_ID);
    if (!userId) return false;
    await axios.post(`${serverUrl}/deliteBook`, {
      bookTitle: titleBook,
      userId: userId,
    });
    return true;
  } catch (error) {
    return false;
  }
};
