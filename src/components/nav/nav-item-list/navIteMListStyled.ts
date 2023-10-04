import { styled } from '@mui/system';
import { ListItemButton, ListItemText, List } from "@mui/material";
import { NavItemKeys } from '../../../enums/navItemKeysEnum';

export const buttonStylesConfig = {
  [NavItemKeys.LIBRARY]: {
    padding: "20px",
    width: "90%",
    alignSelf: "flex-end",
    margin: "30px 10px"
  },
  [NavItemKeys.DICTIONARY]: {
    padding: "10px",
    width: "80%",
    alignSelf: "flex-start"
  },
  [NavItemKeys.TESTING]: {
    padding: "15px",
    width: "85%",
    alignSelf: "flex-end"
  },
};

interface StyledListItemButtonProps {
  padding: string;
  width: string;
  alignSelf: string
  margin?: string
}


export const StyledList = styled(List)({
  backgroundColor: "red",
  maxWidth: '400px',
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
});

export const StyledListItemButton = styled(ListItemButton)<StyledListItemButtonProps>(
  ({ padding, width, alignSelf, margin }) => ({
    backgroundColor: 'var(--secondary-color)',
    borderRadius: "30px",
    width: width,
    minWidth: "250px",
    flexGrow: "0",
    margin: margin || '20px  0px',
    alignSelf: alignSelf,
    padding: padding,
    '&:hover': {
      backgroundColor: 'var(--hover-color)',
    }, '@media (max-width: 350px)': {
      flexGrow: "1",
      margin: '5px  0px',
      alignSelf: "center",
      padding: "10px 0px",
    },
  })
);

export const StyledListItemText = styled(ListItemText)({
  color: 'var(--dark-color)',
  textAlign: "center",
  '& span': {
    fontSize: '30px',
    fontWeight: '900',
  }
})




