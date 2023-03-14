import React from 'react';
import { Grid, FormControl } from '@mui/material';

const GridForm: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Grid item>
        <FormControl fullWidth sx={{ m: 2 }} variant="standard">
          {children}
        </FormControl>
      </Grid>
    </>
  );
};

export default GridForm;
