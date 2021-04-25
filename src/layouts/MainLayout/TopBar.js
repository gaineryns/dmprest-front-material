import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  makeStyles,
  Container,
  Typography
} from '@material-ui/core';
import Logo from 'src/components/Logo';

const useStyles = makeStyles((theme) => ({
  root: {},
  toolbar: {
    height: 64
  },
  menuBut: {
    color: '#ffffff',
    padding: theme.spacing(3)
  },
  spanNav: {
    float: 'right'
  },
  verticalCenter: {
    margin: '0',
    position: 'absolute',
    top: '50 %',
    transform: 'translateY(-50 %)',
  }
}));

const TopBar = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <AppBar
      className={clsx(classes.root, className)}
      elevation={0}
      {...rest}
    >
      <Toolbar className={classes.toolbar}>
        <Container>
          <RouterLink to="/">
            <Logo />
          </RouterLink>

          <RouterLink to="/annonces">
            <Typography gutterBottom variant="button" className={classes.menuBut}>
              Annonces
            </Typography>
          </RouterLink>
          <RouterLink to="/prestataires">
            <Typography gutterBottom variant="button" className={classes.menuBut}>
              Prestataires
            </Typography>
          </RouterLink>
          <span className={classes.spanNav}>
            <RouterLink to="/login">
              <Typography gutterBottom variant="button" className={classes.menuBut} align="right">
                connexion
              </Typography>
            </RouterLink>

            <RouterLink to="/register">
              <Typography gutterBottom variant="button" className={classes.menuBut}>
                inscription
              </Typography>
            </RouterLink>
          </span>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string
};

export default TopBar;
