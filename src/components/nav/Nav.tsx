import { toggleVisibilityMenuItem } from "../../redux/visibilitySlice ";
import { List, ListItemText, ListItemButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootStoreState } from "../../redux/store";
import { AppDispatch } from '../../redux/store';
import { navItems } from './navItems';
import { UserData } from '../../enums/authEnum';
import { NavItemKeys } from '../../enums/navItemKeysEnum';
import { useState } from 'react';
import AuthPopove from '../authPopover/AuthPopover';

const Nav: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const visibilityMenuItem: string = useSelector(
    (state: RootStoreState) => state.visibility.menuItem
  );
  const [OpenAuthPopover, setOpenAuthPopover] = useState<HTMLElement | null>(null);

  const handleNavElem = (menuItem: string, currentTarget: HTMLElement | null) => {
    const userIsRegistered = localStorage.getItem(UserData.USER_ID)
    if (!userIsRegistered && menuItem === NavItemKeys.TESTING) {
      setOpenAuthPopover(currentTarget)
      return
    }
    if (menuItem === visibilityMenuItem) {
      dispatch(toggleVisibilityMenuItem(""));
      return;
    }
    dispatch(toggleVisibilityMenuItem(menuItem));
  };

  const ComponentToRender = visibilityMenuItem === "библиотека" || visibilityMenuItem === "словарь" ? navItems[visibilityMenuItem] : null;
  return (
    <nav>
      <AuthPopove anchorEl={OpenAuthPopover} setAnchorEl={setOpenAuthPopover} popoverValue={"что бы добавить свои cлова в словарь"} />
      <List>
        {Object.keys(navItems).map((menuItem) => (
          <ListItemButton
            onClick={(e) => handleNavElem(menuItem, e.currentTarget)}
            key={menuItem}
            dense
          >
            <ListItemText
              primary={menuItem}
            />
          </ListItemButton>
        ))}
      </List>

      <div>
        {ComponentToRender && <ComponentToRender />}
      </div>
    </nav>
  );
};

export default Nav;
