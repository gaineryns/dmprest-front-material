import React from 'react';
// mport { makeStyles, createStyles } from '@material-ui/core/styles';
import { AppBar, Container, Typography } from '@material-ui/core';
/*
const useStyles = makeStyles((theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  footerText: {
    padding: theme.spacing(2),
    textAlign: 'center',
  }
}),); */

function BottomBar() {
  // const classes = useStyles();
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="md">
        <Typography variant="body1" color="inherit">
          CGV
        </Typography>
        <Typography variant="body1" color="inherit">
          © 2019 Gistia
        </Typography>
      </Container>
    </AppBar>
  );
}

export default BottomBar;
