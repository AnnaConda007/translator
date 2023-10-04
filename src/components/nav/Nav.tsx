import { useState } from 'react';
import AuthPopove from '../authPopover/AuthPopover';
import NawItemList from './nav-item-list/NawItemList';


const Nav: React.FC = () => {
  const [OpenAuthPopover, setOpenAuthPopover] = useState<HTMLElement | null>(null);
  return (
    <nav>
      <AuthPopove anchorEl={OpenAuthPopover} setAnchorEl={setOpenAuthPopover} popoverValue={"что бы добавить свои cлова в словарь"} />
      <NawItemList setOpenAuthPopover={setOpenAuthPopover} />
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