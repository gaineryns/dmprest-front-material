import React from 'react';
import {
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Paper,
  Typography,
  ListItemProps,
  ListItemIcon
} from '@material-ui/core';
import Page from 'src/components/Page';
import BlurOnIcon from '@material-ui/icons/BlurOn';

function ListItemLink(props: ListItemProps <'a', { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  paperheader: {
    padding: theme.spacing(10),
    textAlign: 'center',
    color: '#ffffff',
    background: `center / cover url(${'/static/images/personal2.jpg'})`,
    opacity: '0.5'

  },
}));
const AnnonceView = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Account"
    >
      <Container maxWidth="lg" style={{ padding: 20 }}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={2}
            md={6}
            xs={12}
          >
            <Typography gutterBottom variant="h3" color="primary">
              Catégories
            </Typography>
            <Divider />
            <List component="nav" aria-label="secondary categories">
              <ListItemLink href="#simple-list">
                <ListItemIcon>
                  <BlurOnIcon />
                </ListItemIcon>
                <ListItemText primary="First" />
              </ListItemLink>
            </List>
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <Paper className={classes.paper}>
              <Grid container spacing={2}>
                <Grid item>
                  <BlurOnIcon />
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="h3" color="primary">
                        ad title
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Aute est reprehenderit laborum consectetur dolor aliqua.
                        Voluptate dolor minim occaecat ut do ut anim ex.
                        Anim excepteur labore id amet duis.
                        Incididunt sunt aliquip in adipisicing ex amet ipsum laboris elit duis.
                        Cupidatat ullamco ipsum nisi do. Occaecat minim tempor qui non reprehenderit
                        veniam sint et. Elit duis tempor laborum pariatur ipsum fugiat proident.
                        Nostrud cupidatat officia in ipsum pariatur ex incididunt.
                        Pariatur tempor nulla aliquip reprehenderit est. Eu do mollit a
                        magna quis commodo. Consectetur amet sit cupidatat nostrud do est
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        ID: 1030114
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default AnnonceView;
