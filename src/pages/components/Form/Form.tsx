import React from 'react';
import { Grid, Box, Paper } from '@mui/material';

const Form: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Grid
        component="form"
        noValidate
        autoComplete="off"
        container
        height="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Box sx={{ padding: '10px' }}>{children}</Box>
      </Grid>
    </>
  );
};

export default Form;
