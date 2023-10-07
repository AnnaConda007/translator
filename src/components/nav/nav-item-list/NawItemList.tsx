import { useDispatch, useSelector } from "react-redux";
import {
  StyledList,
  StyledListItemButton,
  StyledListItemText,
} from "./navIteMListStyled";
import { buttonStylesConfig } from "./navIteMListStyled";
import { navItemsList } from "./navItemsList";
import { UserData } from "../../../enums/authEnum";
import { NavItemKeys } from "../../../enums/navItemKeysEnum";
import { AppDispatch, RootStoreState } from "../../../redux/store";
import { toggleVisibilityMenuItem } from "../../../redux/visibilitySlice ";

interface NawItemListProps {
  setOpenAuthPopover: (value: HTMLElement | null) => void;
}

const NawItemList: React.FC<NawItemListProps> = ({ setOpenAuthPopover }) => {
  const dispatch: AppDispatch = useDispatch();
  const visibilityMenuItem: string = useSelector(
    (state: RootStoreState) => state.visibility.menuItem,
  );

  const handleNavElem = (
    menuItem: string,
    currentTarget: HTMLElement | null,
  ) => {
    const userIsRegistered = localStorage.getItem(UserData.USER_ID);
    if (!userIsRegistered && menuItem === NavItemKeys.TESTING) {
      setOpenAuthPopover(currentTarget);
      return;
    }
    if (menuItem === visibilityMenuItem) {
      dispatch(toggleVisibilityMenuItem(""));
      return;
    }
    dispatch(toggleVisibilityMenuItem(menuItem));
  };

  return (
    <StyledList>
      {Object.keys(navItemsList).map((menuItem) => {
        if (!(menuItem in buttonStylesConfig)) return;
        return (
          <StyledListItemButton
            onClick={(e) => handleNavElem(menuItem, e.currentTarget)}
            key={menuItem}
            {...buttonStylesConfig[menuItem as NavItemKeys]}
          >
            <StyledListItemText primary={menuItem} />
          </StyledListItemButton>
        );
      })}
    </StyledList>
  );
};

export default NawItemList;
