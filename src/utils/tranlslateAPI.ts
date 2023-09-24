import axios from "axios";
import { serverUrl } from "../contains";
let IAM_TOKEN: string ;

const getIAMToken = async () => {
  try {
    const response = await axios.post(`${serverUrl}/getIAMToken`);
    IAM_TOKEN = response.data.iamToken;
  } catch (error) {
    console.error(
      "Ошибка при попытке получения токена API Яндекс.Переводчик",
      error
    );
  }
};
setInterval(getIAMToken, 60 * 60 * 1000);

export const translate = async (
  sourceLanguage: string,
  translationWords: string
) => {
  try {
    if (!IAM_TOKEN) {
      await getIAMToken();
    }
     const response = await axios.post(`${serverUrl}/translate`, {
      IAM_TOKEN: IAM_TOKEN,
      sourceLanguage: sourceLanguage,
      targetLanguage: "ru",
      word: translationWords,
    });
    const translatedtranslationWords = response.data.translatedWord;
    return translatedtranslationWords;
  } catch (error) {
    console.error("Ошибка при обращении к API Яндекс.Переводчик  ", error);
    return null;
  }
};
