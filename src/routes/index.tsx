import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginForm, LoginCreate, Todo } from '../pages';
import { AuthContext } from '../shared/contexts/AuthContext';

export const AppRoutes: React.FC = () => {
  const { isAuthenticated } = React.useContext(AuthContext);

  return (
    <Routes>
      {isAuthenticated === true ? (
        <>
          <Route path="/" element={<Todo />} />
          <Route path="/register" element={<Todo />} />

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
