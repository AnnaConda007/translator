import { IEntry } from "../redux/dictionarySlice";

import { TypeAction } from "../components/enum";
export const updateDictionaryToLS = (
  dictionaryEntry: IEntry,
  action: TypeAction,
  entryIndex?: number
) => {
  const retrievedData: string | null = localStorage.getItem("dictionary");
  const dictionary: Array<IEntry> = retrievedData
    ? JSON.parse(retrievedData)
    : [];
  if (action === TypeAction.ADD) {
    dictionary.push(dictionaryEntry);
    localStorage.setItem("dictionary", JSON.stringify(dictionary));
  } else if (entryIndex && action === TypeAction.REMOOVE) {
    dictionary.splice(entryIndex, 1);
    localStorage.setItem("dictionary", JSON.stringify(dictionary));
  }
};
