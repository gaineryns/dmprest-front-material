import React, { useEffect, useState } from 'react';
import {
  Container,
  Grid,
  makeStyles,
} from '@material-ui/core';
import Page from 'src/components/Page';
import { useParams } from 'react-router';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const GetProvision = () => {
  const classes = useStyles();
  const { id } = useParams();
  const [provision, setProvision] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`prestation/${id}`);
      setProvision(response.data);
    };
    fetchData();
  }, []);
  return (
    <Page
      className={classes.root}
      title="Prestations"
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={12}
            md={12}
            xs={12}
          >
            hfjfjfk
            {provision.title}
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            djdod
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            ghdhd
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default GetProvision;
