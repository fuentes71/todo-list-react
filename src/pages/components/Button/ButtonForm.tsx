import React from "react";
import { FormControl, Grid, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { AuthContext } from "../../../shared/contexts/AuthContext";

interface ButtonFormProps {
  type: "button" | "submit";
  children: React.ReactNode;
  loadingIndicator: string;
  onClick?: (e: React.FormEvent) => void;
}

const ButtonSubmit: React.FC<ButtonFormProps> = ({
  children,
  loadingIndicator,
  onClick,
  type,
}) => {
  const { loading } = React.useContext(AuthContext);
  return (
    <React.Fragment>
      <Grid>
        <FormControl sx={{ m: 2, width: "25ch" }} variant="standard">
          {loading ? (
            <LoadingButton
              loading
              loadingIndicator={loadingIndicator}
              variant="outlined"
            ></LoadingButton>
          ) : (
            <Button onClick={onClick} type={type}>
              {children}
            </Button>
          )}
        </FormControl>
      </Grid>
    </React.Fragment>
  );
};

export default ButtonSubmit;
