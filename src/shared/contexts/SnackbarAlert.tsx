import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
interface AlertProps {
  severity: any;
  title: string;
  children: React.ReactNode;
}

export const AlertToast: React.FC<AlertProps> = ({ children, severity, title }) => {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity={severity}>
        <AlertTitle>{title}</AlertTitle>
        {children}
      </Alert>
    </Stack>
  );
};
