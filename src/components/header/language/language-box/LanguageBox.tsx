import { useState, useRef, useEffect } from 'react';
import LanguagePopover from '../updateLanguagePopover/UpdateLanguagePopover';
import { StyledLanguageBox } from './LanguageBoxStyled';
import LanguageList from '../language-list/LanguageList';
import { setActiveLanguageBox } from '../../../../redux/languageUpdateSlice';
import { useDispatch } from 'react-redux';
interface UpdateLanguageProps {
  buttonRef: React.RefObject<HTMLElement>;
}

const LanguageBox: React.FC<UpdateLanguageProps> = ({ buttonRef }) => {
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const popOverRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      setTimeout(() => {
        if (
          popOverRef.current &&
          event.target instanceof Node &&
          !popOverRef.current.contains(event.target) &&
          buttonRef.current &&
          !buttonRef.current.contains(event.target) &&
          !popOverRef.current.contains(anchorEl) &&
          !buttonRef.current.contains(anchorEl)
        ) {
          dispatch(setActiveLanguageBox(false));
        }
      }, 0);
    };

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [anchorEl, buttonRef, dispatch]);


  return (
    <StyledLanguageBox ref={popOverRef}  >
      <LanguageList setAnchorEl={setAnchorEl} />
      <LanguagePopover anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
    </StyledLanguageBox>

  );
};

export default LanguageBox;


/*

*/