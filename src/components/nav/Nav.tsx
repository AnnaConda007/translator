import { useState } from "react";
import NawItemList from "./nav-item-list/NawItemList";
import styles from "./nav.module.css";
import AuthPopove from "../authPopover/AuthPopover";

const Nav: React.FC = () => {
  const [OpenAuthPopover, setOpenAuthPopover] = useState<HTMLElement | null>(
    null,
  );
  return (
    <nav className={styles.nav}>
      <AuthPopove
        anchorEl={OpenAuthPopover}
        setAnchorEl={setOpenAuthPopover}
        popoverValue={"что бы проверить себя"}
      />
      <NawItemList setOpenAuthPopover={setOpenAuthPopover} />
    </nav>
  );
};
export default Nav;
