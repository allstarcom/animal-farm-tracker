// src/styles/navbarStyles.js
import { styled } from '@mui/system';
import { AppBar, Toolbar } from '@mui/material';

const NavbarContainer = styled(AppBar)({
  backgroundColor: '#555',
  left: 0,
  right: 0,
  top: 0,
});

const NavbarToolbar = styled(Toolbar)({
  justifyContent: 'space-between',
});

export { NavbarContainer, NavbarToolbar };
