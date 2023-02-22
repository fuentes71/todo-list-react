import { yellow, cyan } from "@mui/material/colors";
import { createTheme } from "@mui/material";
export const DarkThemer = createTheme({
  palette: {
    primary: {
      main: yellow[700],
      dark: yellow[800],
      light: yellow[400],
      contrastText: "#ffffff",
    },
    secondary: {
      main: cyan[700],
      dark: cyan[800],
      light: cyan[500],
      contrastText: "#ffffff",
    },
    background: {
      default: "#303134",
      paper: "#222222",
    },
  },
});
