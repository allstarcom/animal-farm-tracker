// src/components/Sidebar.js
import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home, ListAlt } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import useStyles from '../../styles/sidebarStyles';

const Sidebar = () => {
  const classes = useStyles();

  return (
    <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
      <List>
        <ListItem button component={Link} to="/dashboard">
          <ListItemIcon><Home /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/farms">
          <ListItemIcon><ListAlt /></ListItemIcon>
          <ListItemText primary="Farms" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
