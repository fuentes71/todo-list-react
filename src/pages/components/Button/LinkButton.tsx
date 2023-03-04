import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { ButtonProps, Button } from "@mui/material";

interface LinkButtonProps extends ButtonProps {
  to: string;
  children: React.ReactNode;
}

const LinkButton: React.FC<LinkButtonProps> = ({ children, to, ...rest }) => (
  <LinkButton LinkComponent={RouterLink} to={to} {...rest}>
    {children}
  </LinkButton>
);

export default LinkButton;
