import { generateUserDatabaseURL_point } from '../../contains';
import { DataBasePoints } from '../../components/enum';

export const updateLanguage = async (lang: string) => {
  const url = generateUserDatabaseURL_point(DataBasePoints.DICTIONARY)
  try {
    await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ [DataBasePoints.LANGUAGE]: lang }),
    });
  } catch (error) {
    console.error("Ошибка при обновлении словаря", error);
  }
};
