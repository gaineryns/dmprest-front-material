import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Typography } from '@material-ui/core';

export default function userMenu() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Typography aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Mon profil
      </Typography>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Mes annonces</MenuItem>
        <MenuItem onClick={handleClose}>Mes informations</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
