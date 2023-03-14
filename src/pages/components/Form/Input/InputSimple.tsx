import React from 'react';
import { FormControl, Input, Grid, InputLabel, TextField } from '@mui/material';
import { AuthContext } from '../../../../shared/contexts/AuthContext';
import GridForm from '../GridForm';
import { InputSimpleProps } from '../../../../shared/types';

const InputSimple: React.FC<InputSimpleProps> = ({ label, id, onChange, helperText, error }) => {
  const { loading } = React.useContext(AuthContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(id, e.target.value);
  };

  return (
    <>
      <GridForm>
        <TextField
          variant="standard"
          required
          label={label}
          disabled={loading}
          error={error}
          type={id}
          id={id}
          helperText={helperText}
          onChange={handleChange}
        />
      </GridForm>
    </>
  );
};

export default InputSimple;
