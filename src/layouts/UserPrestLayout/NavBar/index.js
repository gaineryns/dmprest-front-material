import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Divider,
  Drawer,
  Hidden,
  List,
  makeStyles
} from '@material-ui/core';
import axios from 'axios';
import NavItem from './NavItem';

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  }
}));

const NavBar = ({ user, onMobileClose, openMobile }) => {
  const classes = useStyles();
  const location = useLocation();
  const [provisions, setProvisions] = useState([]);
  console.log(user);
  console.log(provisions);
  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('prestation');
      setProvisions(response.data);
    };
    fetchData();
  }, []);
  const content = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        p={2}
      >
        <Button
          color="primary"
          variant="contained"
        >
          new prestation
        </Button>
      </Box>
      <Divider />
      <Box />
      <List>
        {provisions.map((item) => (
          <NavItem
            href={`/user/provision/${item.id}`}
            key={item.title}
            title={item.title}
          />
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
  user: PropTypes.object,
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false
};

export default NavBar;
