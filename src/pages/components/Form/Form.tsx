import React from "react";
import { Container, Grid, Box, Paper } from "@mui/material";
interface FormProps {
  maxWidth: "sm" | "lg" | "md" | "xl" | "xs";
  children: React.ReactNode;
}
const Form: React.FC<FormProps> = ({ maxWidth, children }) => {
  return (
    <React.Fragment>
      <Container maxWidth={maxWidth}>
        <Grid
          container
          height="100vh"
          justifyContent="center"
          alignItems="center"
        >
          <Box component="form" noValidate autoComplete="off">
            <Paper style={{ padding: "10px" }}>{children}</Paper>
          </Box>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Form;
