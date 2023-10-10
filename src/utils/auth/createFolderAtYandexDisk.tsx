import axios from "axios";
import { serverUrl } from "../../constants";

export const createFolerAtYandexDisk = async (userId: string) => {
  try {
    if (!userId) return false;
    await axios.post(`${serverUrl}/createFolder`, {
      userId: userId,
    });
    return true;
  } catch (error) {
    console.error(
      "Ошибка при создании папки пользоваьеля на Яндекс.Диск ,",
      error,
    );
  }
};
