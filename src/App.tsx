import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AuthProvider } from "./shared/contexts/AuthContext";
import { AppThemeProvider } from "./shared/contexts/ThemeContext";

export const App = () => {
  return (
    <>
          <CssBaseline/>
      <AppThemeProvider>
        <AuthProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </AuthProvider>
      </AppThemeProvider>
    </>
  );
};
