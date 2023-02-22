import Button from "@mui/material/Button";
import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../pages";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/Cadastro"
        element={
          <Button variant="contained" color="secondary">
            pag inicial
          </Button>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
