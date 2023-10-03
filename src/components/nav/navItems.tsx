import Library from '../library/Library';
import Dictionary from '../dictionary/Dictionary';
import FlashCards from '../flashCards/FlashCards';
import { NavItemKeys } from '../../enums/navItemKeysEnum';

interface INavElements {
  [key: string]: React.FC;
}

export const navItems: INavElements = {
  [NavItemKeys.LIBRARY]: Library,
  [NavItemKeys.DICTIONARY]: Dictionary,
  [NavItemKeys.TESTING]: FlashCards,
};
