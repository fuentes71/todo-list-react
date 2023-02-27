import React from "react";

import {
  FormControl,
  Input,
  Container,
  Grid,
  InputLabel,
  Box,
  Paper,
  Button,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { AuthContext } from "../../shared/contexts/AuthContext";

export const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [showPassword, setShowPassword] = React.useState(false);
  const { login, error, loading, isAuthenticated } =
    React.useContext(AuthContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // window.localStorage.setItem(
    //   "data",
    //   JSON.stringify([
    //     { email: "teste", password: "123" },
    //     { email: "matheus@gmail.com", password: "123" },
    //   ])
    // );

    login(email, password);
    // eslint-disable-next-line no-const-assign
  };

  return (
    <Container maxWidth="sm">
      <Grid
        container
        height="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          onSubmit={handleSubmit}
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <Paper style={{ padding: "10px" }}>
            {error && (
              <Box>
                <Grid textAlign="center" style={{ color: "red" }}>
                  {error}
                </Grid>
              </Box>
            )}
            <Grid>
              <FormControl sx={{ m: 2, width: "25ch" }} variant="standard">
                <InputLabel htmlFor="email">E-mail</InputLabel>
                <Input
                  disabled={loading}
                  error={error === null ? false : true}
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
            </Grid>
            <Grid>
              <FormControl sx={{ m: 2, width: "25ch" }} variant="standard">
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  disabled={loading}
                  error={error === null ? false : true}
                  id="password"
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                  endAdornment={
                    <InputAdornment
                      disablePointerEvents={loading}
                      position="end"
                    >
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid>
              <FormControl sx={{ m: 2, width: "25ch" }} variant="standard">
                {loading ? (
                  <LoadingButton
                    loading
                    loadingIndicator="Conectando..."
                    variant="outlined"
                  ></LoadingButton>
                ) : (
                  <Button type="submit">Conectar</Button>
                )}
              </FormControl>
            </Grid>
          </Paper>
        </Box>
      </Grid>
    </Container>
  );
};
