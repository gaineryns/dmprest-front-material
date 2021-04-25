import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  AppBar,
  Toolbar,
  makeStyles,
  Typography,
  Grid,
  Container
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
          <Grid
            container
          >
            <Grid
              item
              sm={1}
            >
              <RouterLink to="/">
                <Logo />
              </RouterLink>
            </Grid>
            <Grid
              item
              sm={7}
            >
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
            </Grid>
            <Grid
              item
              sm={4}
            >
              <RouterLink to="/login">
                <Typography gutterBottom variant="button" className={classes.menuBut}>
                  connexion
                </Typography>
              </RouterLink>
              <RouterLink to="/register">
                <Typography gutterBottom variant="button" className={classes.menuBut}>
                  inscription
                </Typography>
              </RouterLink>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string
};

export default TopBar;
