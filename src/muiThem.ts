import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#9751F2",
    },
    secondary: {
      main: "#FFFFFF",
    },
    text: {
      primary: "#000000",
    },
  },
  typography: {
    fontFamily: "SofiaSansCondensed, sans-serif",
  },
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {},
      },
    },
  },
});

export default theme;
