interface ItranslationData {
  exception_code: null | number | string;
  matches: Array<{
    id: string;
    segment: string;
    translation: string;
    source: string;
    target: string;
  }>;
  mtLangSupported: null | number | string;
  quotaFinished: boolean;
  responderId: number;
  responseData: {
    match: number;
    translatedText: string;
  };
  responseDetails: string;
  responseStatus: number;
}

export const translate = async (word: string): Promise<string | null> => {
  try {
    const formattedWord = word.replace(/[.,!?;]+/g, "").toLowerCase();
    const email: string = "annahrulkova@yandex.ru";
    const sourceLanguage: string = "ru";
    const targetLanguage: string = "en";
    const url: string = `https://api.mymemory.translated.net/get?q=${formattedWord}&langpair=${sourceLanguage}|${targetLanguage}&de=${email}.ru`;
    const translationResponse: Response = await fetch(url);
    const translationData: ItranslationData = await translationResponse.json();
    const translatedWord: string = translationData.responseData.translatedText;
    return translatedWord;
  } catch (error) {
    console.error("Ошибка при запросе к API перевода ", error);
    return null;
  }
};
