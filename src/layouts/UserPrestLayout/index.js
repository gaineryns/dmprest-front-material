import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import axios from 'axios';
import NavBar from './NavBar/index';
import TopBar from './TopBar';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256
    }
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
  }
}));

const UserPrestLayout = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  useEffect(() => {
    (
      async () => {
        try {
          const response = await axios.get('authentication');
          const userUpdated = response.data;
          setUser(userUpdated);
        } catch (e) {
          navigate('/login');
        }
      }
    )();
  }, []);
  return (
    <div className={classes.root}>
      <TopBar />
      <NavBar user={user} />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPrestLayout;
