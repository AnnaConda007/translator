
import { generateUserDatabaseURL_point } from '../../contains';
import { dataFromBD } from '../../redux/dictionarySlice';
import { DataBasePoints } from '../../components/enum';


export const updateDictionaryEntries = async (dictionaryEntries: {
  [key: string]: dataFromBD | null;
}) => {
  const dictionaryUserURL = generateUserDatabaseURL_point(DataBasePoints.DICTIONARY)
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