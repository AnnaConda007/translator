import { DataBasePoints } from '../../enums/enum';
import { generateUserDatabaseURL_point } from '../../contains';

export const clearDictionaryAndUpdateLanguage = async (
  newSelectedLanguage: string
) => {
  const dictionaryUserURL = generateUserDatabaseURL_point(DataBasePoints.DICTIONARY)
  const data = {
    [DataBasePoints.LANGUAGE]: newSelectedLanguage
  }
  try {
    await fetch(dictionaryUserURL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } catch (error) {
    console.error(error);
  }
};