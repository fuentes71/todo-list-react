import React from "react";
import Button from "@mui/material/Button";
import { Routes, Route, Navigate } from "react-router-dom";
import { Login, TodoList } from "../pages";
import { AuthContext } from "../shared/contexts/AuthContext";

export const AppRoutes = () => {
  const { isAuthenticated } = React.useContext(AuthContext);

  return (
    <Routes>
      {isAuthenticated === true ? (
        <>
          <Route path="/" element={<TodoList />} />

          <Route path="*" element={<Navigate to="/" />} />
        </>
      ) : (
        <>
          <Route path="/Login" element={<Login />} />
          <Route
            path="/Cadastro"
            element={
              <Button variant="contained" color="secondary">
                pag inicial
              </Button>
            }
          />
          <Route path="*" element={<Navigate to="/Login" />} />
        </>
      )}
    </Routes>
  );
};
