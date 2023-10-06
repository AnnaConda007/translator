import { useState } from 'react';
import AuthPopove from '../authPopover/AuthPopover';
import NawItemList from './nav-item-list/NawItemList';
import styles from "./nav.module.css"

const Nav: React.FC = () => {
  const [OpenAuthPopover, setOpenAuthPopover] = useState<HTMLElement | null>(null);
  return (
    <nav className={styles.nav}>
      <AuthPopove anchorEl={OpenAuthPopover} setAnchorEl={setOpenAuthPopover} popoverValue={"что бы добавить свои cлова в словарь"} />
      <NawItemList setOpenAuthPopover={setOpenAuthPopover} />
    </nav>
  );
};
export default Nav;


