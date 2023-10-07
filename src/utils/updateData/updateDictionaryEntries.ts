import { generateUserDatabaseURL_point } from "../../contains";
import { UserData } from "../../enums/authEnum";
import { DataBasePoints } from "../../enums/dataBasePointsEnum";
import { dataFromBD } from "../../redux/dictionarySlice";

export const updateDictionaryEntries = async (dictionaryEntries: {
  [key: string]: dataFromBD | null;
}) => {
  const userFairbaseId = localStorage.getItem(UserData.USER_ID);
  if (!userFairbaseId) return;
  const dictionaryUserURL = generateUserDatabaseURL_point({
    userFairbaseId,
    dbPoint: DataBasePoints.DICTIONARY,
  });
  try {
    await fetch(dictionaryUserURL, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dictionaryEntries),
    });
  } catch (error) {
    console.error(error);
  }
};
