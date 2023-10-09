import { Box, ListItem, ListItemText, List } from "@mui/material";
import { styled } from "@mui/system";
import { alpha } from "@mui/system";

export const StyledContentBacking = styled(Box)({
  boxSizing: "border-box",
  borderRadius: "10px",
  width: "100%",
  height: "75%",
  maxWidth: "350px",
  marginRight: "50px",
  padding: "15px",
  display: "flex",
  flexDirection: "column",
  "@media (max-width: 900px)": {
    maxWidth: "none",
    width: "100%",
    height: "100%",
    marginRight: "0px",
  },
});

export const StyledContentBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  flexGrow: "1",
  boxSizing: "border-box",
});

export const ListStyled = styled(List)({
  overflowY: "auto",
  maxHeight: "80%",
});

export const ListItemStyled = styled(ListItem)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.primary.light, 0.3),
  marginTop: "2px",
  paddingLeft: "5px",
}));

export const ListItemTextStyled = styled(ListItemText)({
  overflowWrap: "break-word",
  "& span": {
    fontSize: "15px",
  },
});
