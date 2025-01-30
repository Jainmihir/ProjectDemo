import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import { Refresh, Help, ViewModule } from '@mui/icons-material';

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Tools
        </Typography>
        <IconButton color="inherit">
          {/* <Refresh /> */}
          Referdh
        </IconButton>
        <IconButton color="inherit">
          {/* <ViewModule /> */}
        </IconButton>
        <IconButton color="inherit">
          {/* <Help /> */}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;