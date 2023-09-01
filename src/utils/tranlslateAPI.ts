import axios from "axios";
 let IAM_TOKEN: string = "";
const getIAMToken = async () => {
  try {
    const response = await axios.post(`http://localhost:3000/getIAMToken`);
    IAM_TOKEN = response.data.iamToken;
  } catch (error) {
    console.error(
      "Ошибка при попытке получения токена API Яндекс.Переводчик",
      error
    );
  }
};
setInterval(getIAMToken, 60 * 60 * 1000);

 
export const translate = async ( targetLanguage:string, translationWords: string ) => {
  try {
    if (!IAM_TOKEN) {
      await getIAMToken();
    }
    const response = await axios.post(`http://localhost:3000/translate`, {
      IAM_TOKEN: IAM_TOKEN,
      targetLanguage: targetLanguage,
      word: translationWords,
    });
    const translatedtranslationWords = response.data.translatedWord
    console.log(translatedtranslationWords)
    return translatedtranslationWords;
  } catch (error) {
    console.error("Ошибка при обращении к API Яндекс.Переводчик  ", error);
    return null;
  }
};
