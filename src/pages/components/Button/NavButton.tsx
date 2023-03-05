import React from "react";
import { NavLink } from "react-router-dom";
import { ButtonProps } from "@mui/material";
import GridForm from "../Form/GridForm";

interface LinkButtonProps extends ButtonProps {
  to: string;
  children: React.ReactNode;
}

const NavButton: React.FC<LinkButtonProps> = ({ children, to }) => {
  return (
    <>
      <GridForm>
        <NavLink to={to}>{children}</NavLink>
      </GridForm>
    </>
  );
};

export default NavButton;
