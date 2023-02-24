import { Button, Container } from "@mui/material";
import React from "react";
import { AuthContext } from "../shared/contexts/AuthContext";

export const TodoList = () => {
  const { logout } = React.useContext(AuthContext);
  return (
    <Container maxWidth="md" style={{ background: "red" }}>
      <Button onClick={() => logout()}>logout</Button>
    </Container>
  );
};
