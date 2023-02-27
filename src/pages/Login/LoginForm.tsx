import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../shared/contexts/AuthContext";
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

export const LoginForm = () => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const [showPassword, setShowPassword] = React.useState(false);
  const { login, error, loading } = React.useContext(AuthContext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
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
                  onChange={({ target }) => setEmail(target.value)}
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
                  onChange={({ target }) => setPassword(target.value)}
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
            <Grid>
              <FormControl sx={{ m: 2, width: "25ch" }} variant="standard">
                <p>
                  Não possui conta?
                  <Link to="/singup">Cadastre-se Aqui!</Link>
                </p>
              </FormControl>
            </Grid>
          </Paper>
        </Box>
      </Grid>
    </Container>
  );
};
