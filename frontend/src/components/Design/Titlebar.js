import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

function Titlebar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Company Name
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Titlebar;