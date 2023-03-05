import React from "react";
import { Grid, FormControl } from "@mui/material";

type BoxFormProps = {
  children: React.ReactNode;
};
const GridForm: React.FC<BoxFormProps> = ({ children }) => {
  return (
    <>
      <Grid>
        <FormControl sx={{ m: 2, width: "25ch" }} variant="standard">
          {children}
        </FormControl>
      </Grid>
    </>
  );
};

export default GridForm;
