import React from "react";
import { FormControl, Grid, Button } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { AuthContext } from "../../../shared/contexts/AuthContext";
import GridForm from "../Form/GridForm";

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
    <>
      <GridForm>
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
      </GridForm>
    </>
  );
};

export default ButtonSubmit;
