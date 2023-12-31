import { generateUserDatabaseURL_point } from "../../constants";
import { UserData } from "../../enums/authEnum";
import { DataBasePoints } from "../../enums/dataBasePointsEnum";
export const clearDictionaryAndspecifyLanguage = async (
  newSelectedLanguage: string,
) => {
  const userFairbaseId = localStorage.getItem(UserData.USER_ID);
  if (!userFairbaseId) return;
  const dictionaryUserURL = generateUserDatabaseURL_point({
    userFairbaseId,
    dbPoint: DataBasePoints.DICTIONARY,
  });
  const data = {
    [DataBasePoints.LANGUAGE]: newSelectedLanguage,
  };
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
