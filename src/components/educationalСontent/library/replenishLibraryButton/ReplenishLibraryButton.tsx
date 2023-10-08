import { useState } from "react";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { UserData } from "../../../../enums/authEnum";
import { toggleAddNewBookInput } from "../../../../redux/visibilitySlice ";
import AuthPopove from "../../../authPopover/AuthPopover";

const ReplenishLibraryButton = () => {
  const userIsRegistered = localStorage.getItem(UserData.USER_ID);
  const [OpenAuthPopover, setOpenAuthPopover] = useState<HTMLElement | null>(
    null,
  );
  const [clickedButton, setClickedButton] = useState(true);
  const dispatch = useDispatch();

  const handleButton = (currentTarget: HTMLElement | null) => {
    if (!userIsRegistered) {
      setOpenAuthPopover(currentTarget);
      return;
    }
    dispatch(toggleAddNewBookInput(clickedButton));
    setClickedButton(!clickedButton);
  };

  return (
    <>
      <IconButton
        color="primary"
        onClick={(e) => handleButton(e.currentTarget)}
      >
        {" "}
        <LibraryAddIcon />
      </IconButton>
      <AuthPopove
        anchorEl={OpenAuthPopover}
        setAnchorEl={setOpenAuthPopover}
        popoverValue={"что бы добавить свои книги"}
      />
    </>
  );
};

export default ReplenishLibraryButton;
