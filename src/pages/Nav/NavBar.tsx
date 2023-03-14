import { Box, Grid } from '@mui/material';
import React from 'react';

const navBar = () => {
  return (
    <Grid container padding={'2vw'} bgcolor={'#f4f4f4'} height="100vh">
      <Box bgcolor={'#red'}>
        <Grid item>user</Grid>
      </Box>
    </Grid>
  );
};

export default navBar;
