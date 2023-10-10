import { useState } from "react";
import { useSelector } from "react-redux";
import NawItemList from "./nav-item-list/NawItemList";
import { NavStyled } from "./NavStyled";
import { useScreenSize } from "../../hooks/useScreenSize";
import { RootStoreState } from "../../redux/store";
import AuthPopove from "../authPopover/AuthPopover";

const Nav: React.FC = () => {
  const [OpenAuthPopover, setOpenAuthPopover] = useState<HTMLElement | null>(
    null,
  );
  const isMenuOpen = useSelector(
    (state: RootStoreState) => state.visibility.menuOpen,
  );
  const isMobile = useScreenSize();

  return (
    <NavStyled style={{ display: isMobile && !isMenuOpen ? "none" : "block" }}>
      <AuthPopove
        anchorEl={OpenAuthPopover}
        setAnchorEl={setOpenAuthPopover}
        popoverValue={"что бы проверить себя"}
      />
      <NawItemList setOpenAuthPopover={setOpenAuthPopover} />
    </NavStyled>
  );
};
export default Nav;
