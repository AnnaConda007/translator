import { generateUserDatabaseURL_point } from '../../contains';
import { DataBasePoints } from '../../enums/dataBasePointsEnum';

export const updateLanguage = async (lang: string) => {
  const userFairbaseId = localStorage.getItem("userFairbaseId")
  if (!userFairbaseId) return
  const url = generateUserDatabaseURL_point({ userFairbaseId, dbPoint: DataBasePoints.DICTIONARY })
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
