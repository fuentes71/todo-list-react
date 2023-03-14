import React from 'react';
import { NavLink } from 'react-router-dom';
import { ButtonProps, Typography } from '@mui/material';
import GridForm from '../GridForm';
import { NavButtonProps } from '../../../../shared/types';

const NavButton: React.FC<NavButtonProps> = ({ children, to, link }) => {
  return (
    <>
      <GridForm>
        <Typography>
          {children} <NavLink to={to}>{link}</NavLink>
        </Typography>
      </GridForm>
    </>
  );
};

export default NavButton;
