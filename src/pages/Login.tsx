import {
  FormControl,
  Input,
  Container,
  Grid,
  InputLabel,
  Box,
  Paper,
  ButtonGroup,
  Button,
  IconButton,
  ButtonBase,
  ToggleButton,
  StepButton,
  StepLabel,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import React from "react";

export const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isVisibility, setIsVisibility] = React.useState(false);

  function handleSubmit(e: { preventDefault: () => void }, data: string) {
    e.preventDefault();
    console.log(data);
  }
  console.log(email);

  return (
    <Container maxWidth={false} sx={{ width: "100%", height: "100%" }}>
      <Grid
        sx={{ width: "100%", height: "100%" }}
        container
        justifyContent="center"
        alignItems="center"
      >
        <Box padding="20px" alignItems="center" justifyContent="center">
          <form>
            <Paper style={{ padding: "50px 20px" }}>
              <Grid margin=" 0 2vw 5vh 2vw">
                <FormControl>
                  <InputLabel itemRef="email">E-mail</InputLabel>
                  <Input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
              </Grid>
              <Grid margin="5vh 2vw 0 2vw">
                <FormControl>
                  <InputLabel itemRef="password">Password</InputLabel>
                  <Input
                    type={isVisibility === true ? "text" : "password"}
                    id="password"
                    style={{ position: "relative" }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <IconButton
                    style={{ position: "absolute", top: "25%", right: "0" }}
                    onClick={() => setIsVisibility(!isVisibility)}
                  >
                    {isVisibility === true ? (
                      <VisibilityOffIcon />
                    ) : (
                      <VisibilityIcon />
                    )}
                  </IconButton>
                </FormControl>
              </Grid>
              <Grid display="flex" justifyContent="center" marginTop="5vh">
                <FormControl>
                  <Button type="submit">Entrar</Button>
                </FormControl>
              </Grid>
            </Paper>
          </form>
        </Box>
      </Grid>
    </Container>
  );
};
