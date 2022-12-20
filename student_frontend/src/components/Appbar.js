import * as React from 'react';
import { AppBar } from '@material-ui/core';
import {Box} from '@material-ui/core';
import {Toolbar} from '@material-ui/core';
import {Typography} from '@material-ui/core';
import {IconButton} from '@material-ui/core';
import MenuIcon from '@mui/icons-material/Menu';
export default function Appbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
            {/* <Icon></Icon> */}
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Spring Boot React
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
