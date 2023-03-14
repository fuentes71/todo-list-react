import React from 'react';
import { FormControl, Grid, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { AuthContext } from '../../../../shared/contexts/AuthContext';
import GridForm from '../GridForm';
import { ButtonSubmitProps } from '../../../../shared/types';

const ButtonSubmit: React.FC<ButtonSubmitProps> = ({ children, loadingIndicator, onClick }) => {
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
          <Button onClick={onClick} type="submit">
            {children}
          </Button>
        )}
      </GridForm>
    </>
  );
};

export default ButtonSubmit;
