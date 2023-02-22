import { ThemeProvider, Box, Button } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import React from "react";
import { DarkThemer, LightTheme } from "../thermes";
interface IThemeContextData {
  themeName: "Light" | "Dark";
  toggleTheme: () => void;
}
const ThemeContext = () => {
  React.createContext({} as IThemeContextData);
};
export const AppThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [themeName, setThemeName] = React.useState<"Light" | "Dark">("Light");

  const toggleTheme = React.useCallback(() => {
    ThemeContext();
    setThemeName((oldThemeName) =>
      oldThemeName === "Light" ? "Dark" : "Light"
    );
  }, []);

  const theme = React.useMemo(() => {
    if (themeName === "Light") return LightTheme;
    return DarkThemer;
  }, [themeName]);
  return (
    <ThemeProvider theme={theme}>
      <Box
        width="100vw"
        height="100vh"
        bgcolor={theme.palette.background.default}
      >
        <Button onClick={toggleTheme}>
          {themeName === "Light" ? <DarkModeIcon /> : <LightModeIcon />}
        </Button>
        {children}
      </Box>
    </ThemeProvider>
  );
};
