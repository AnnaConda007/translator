import { toggleVisibilityMenuItem } from "../../redux/visibilitySlice ";
import { List, ListItemText, ListItemButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootStoreState } from "../../redux/store";
import { AppDispatch } from '../../redux/store';
import { navItems } from './navItems';

const Nav: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const visibilityMenuItem: string = useSelector(
    (state: RootStoreState) => state.visibility.menuItem
  );

  const handleNavElem = (menuItem: string) => {
    if (menuItem === visibilityMenuItem) {
       return;
    }
   };
  const ComponentToRender = visibilityMenuItem === "библиотека" || visibilityMenuItem === "словарь" ? navItems[visibilityMenuItem] : null;
  return (
    <nav>
      <List>
        {Object.keys(navItems).map((menuItem) => (
          <ListItemButton
            onClick={() => handleNavElem(menuItem)}
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
