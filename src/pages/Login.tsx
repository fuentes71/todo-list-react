import { Grid3x3 } from "@mui/icons-material";
import {
  FormControl,
  FormLabel,
  Input,
  Container,
  Typography,
  Grid,
  InputLabel,
  Box,
  Paper,
} from "@mui/material";
import React from "react";

export const Login = () => {
  const [email, setEmail] = React.useState("");
  return (
    <Container maxWidth="sm">
      <Grid
        height="100%"
        container
        flexDirection="row"
        justifyContent={"center"}
        alignItems="center"
      >
        <form action="">
          <Paper>
            <Box width="100%" height="100%" padding="5vh 2vw">
              <Grid margin="5vh 2vw">
                <FormControl>
                  <InputLabel itemRef="email">E-mail</InputLabel>
                  <Input type={email} id={email} />
                </FormControl>
              </Grid>
              <Grid margin="5vh 2vw">
                <FormControl>
                  <InputLabel itemRef="password">Password</InputLabel>
                  <Input type="password" id="password" />
                </FormControl>
              </Grid>
            </Box>
          </Paper>
        </form>
      </Grid>
    </Container>
  );
};
