import { generateUserDatabaseURL_point } from '../../contains'; 
import { DataBasePoints } from '../../components/enum';  

export const updateLanguage= async (lang: string) => {
  const url = generateUserDatabaseURL_point(DataBasePoints.LANGUAGE)
  try {
    await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(lang),
    });
  } catch (error) {
    console.error("Ошибка при обновлении словаря", error);
  }
};
