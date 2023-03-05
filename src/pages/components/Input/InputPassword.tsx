import React from "react";
import { AuthContext } from "../../../shared/contexts/AuthContext";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  Input,
  Grid,
  InputLabel,
  InputAdornment,
  IconButton,
  TextField,
  Box,
  OutlinedInput,
} from "@mui/material";
import GridForm from "../Form/GridForm";

interface InputProps {
  label: string;
  helperText?: string;
  error?: boolean;
  id: string;
  onChange: (id: string, value: string) => void;
}

const InputPassword: React.FC<InputProps> = ({
  label,
  id,
  onChange,
  helperText,
  error,
}) => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const { loading } = React.useContext(AuthContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(id, e.target.value);
  };

  return (
    <>
      <GridForm>
        <TextField
          variant="standard"
          disabled={loading}
          error={error}
          type={showPassword ? "text" : "password"}
          id={id}
          helperText={helperText}
          onChange={handleChange}
          label={label}
          InputProps={{
            endAdornment: (
              <InputAdornment disablePointerEvents={loading} position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </GridForm>
    </>
  );
};

export default InputPassword;
