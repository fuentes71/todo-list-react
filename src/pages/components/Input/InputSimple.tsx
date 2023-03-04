import React from "react";
import { FormControl, Input, Grid, InputLabel, TextField } from "@mui/material";
import { AuthContext } from "../../../shared/contexts/AuthContext";

interface InputProps {
  label: string;
  helperText?: string;
  error?: boolean;
  id: "email" | "name" | "password" | "repeatPassword";
  onChange: (
    id: "email" | "name" | "password" | "repeatPassword",
    value: string
  ) => void;
}
const InputSimple: React.FC<InputProps> = ({
  label,
  id,
  onChange,
  helperText,
  error,
}) => {
  const { loading } = React.useContext(AuthContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(id, e.target.value);
  };

  return (
    <React.Fragment>
      <Grid>
        <FormControl sx={{ m: 2, width: "25ch" }} variant="standard">
          <TextField
            variant="standard"
            label={label}
            disabled={loading}
            error={error}
            type={id}
            id={id}
            helperText={helperText}
            onChange={handleChange}
          />
        </FormControl>
      </Grid>
    </React.Fragment>
  );
};

export default InputSimple;
