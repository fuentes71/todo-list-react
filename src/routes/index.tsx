import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { LoginForm, LoginCreate, TodoList } from "../pages";
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
          <Route path="/singin" element={<LoginForm />} />
          <Route path="/singup" element={<LoginCreate />} />
          <Route path="*" element={<Navigate to="/singin" />} />
        </>
      )}
    </Routes>
  );
};
