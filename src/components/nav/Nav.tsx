import { toggleVisibilityMenuItem } from "../../redux/visibilitySlice ";
import { useDispatch, useSelector } from "react-redux";
import { RootStoreState } from "../../redux/store";
import { AppDispatch } from '../../redux/store';
import { navItemsList } from './navItemsList';
import { UserData } from '../../enums/authEnum';
import { NavItemKeys } from '../../enums/navItemKeysEnum';
import { useState } from 'react';
import AuthPopove from '../authPopover/AuthPopover';
import { StyledListItemButton, StyledListItemText, StyledList } from './styled'
import { buttonStylesConfig } from './styled';

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

  return (
    <nav>
      <AuthPopove anchorEl={OpenAuthPopover} setAnchorEl={setOpenAuthPopover} popoverValue={"что бы добавить свои cлова в словарь"} />
      <StyledList >
        {Object.keys(navItemsList).map((menuItem) => {
          if (!(menuItem in buttonStylesConfig)) return
          return (
            <StyledListItemButton
              onClick={(e) => handleNavElem(menuItem, e.currentTarget)}
              key={menuItem}
              {...buttonStylesConfig[menuItem as NavItemKeys]}
            >
              <StyledListItemText primary={menuItem} />
            </StyledListItemButton>
          );
        })
        }
      </StyledList>
    </nav>
  );
};
export default Nav;


/*





  const ComponentToRender = visibilityMenuItem === "словарь" || visibilityMenuItem === "тестирование" ? navItems[visibilityMenuItem] : null;


  <div>
        {ComponentToRender && <ComponentToRender />}
      </div>
*/