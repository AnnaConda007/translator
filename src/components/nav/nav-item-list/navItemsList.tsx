import { NavItemKeys } from "../../../enums/navItemKeysEnum";
import Dictionary from "../../educationalСontent/dictionary/Dictionary";
import FlashCards from "../../educationalСontent/flashCards/FlashCards";
import Library from "../../educationalСontent/library/Library";

interface INavElements {
  [key: string]: React.FC;
}

export const navItemsList: INavElements = {
  [NavItemKeys.LIBRARY]: Library,
  [NavItemKeys.DICTIONARY]: Dictionary,
  [NavItemKeys.TESTING]: FlashCards,
};
