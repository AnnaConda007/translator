import { ListItemButton, ListItemText, List } from "@mui/material";
import { styled } from "@mui/system";
import { breakpoints } from "../../../constants";
import { NavItemKeys } from "../../../enums/navItemKeysEnum";

export const buttonStylesConfig = {
  [NavItemKeys.LIBRARY]: {
    padding: "20px",
    width: "90%",
    alignself: "flex-end",
    margin: "30px 10px",
  },
  [NavItemKeys.DICTIONARY]: {
    padding: "10px",
    width: "80%",
    alignself: "flex-start",
  },
  [NavItemKeys.TESTING]: {
    padding: "15px",
    width: "85%",
    alignself: "flex-end",
  },
};

interface StyledListItemButtonProps {
  padding: string;
  width: string;
  alignself: string;
  margin?: string;
}

export const StyledList = styled(List)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const StyledListItemButton = styled(
  ListItemButton,
)<StyledListItemButtonProps>(
  ({ padding, width, alignself, margin, theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "30px",
    width: width,
    minWidth: "250px",
    flexGrow: "0",
    margin: margin || "20px  0px",
    alignSelf: alignself,
    padding: padding,
    [`@media (max-width: ${breakpoints.mobile}px)`]: {
      alignSelf: "center",
      padding: "10px 0px",
      width: "90%",
    },
  }),
);

export const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  color: theme.palette.text.primary,
  textAlign: "center",
  "& span": {
    fontSize: "30px",
    fontWeight: "bold",
  },
}));
