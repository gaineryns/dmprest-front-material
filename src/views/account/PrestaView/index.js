import React from 'react';
import {
  Box,
  Button,
  Container,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import Page from 'src/components/Page';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
    '& > *': {
      margin: theme.spacing(1),
    },
  }
}));

const AddProvision = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Page
      className={classes.root}
      title="Prestations"
    >
      <Container maxWidth="lg">
        <Formik
          initialValues={{
            title: '',
            content: ''
          }}
          validationSchema={Yup.object().shape({
            title: Yup.string().max(255).required('Title is required'),
            content: Yup.string().max(255).required('Content is required')
          })}
          onSubmit={(values, { setSubmitting, setErrors }) => {
            const { title, content } = values;

            axios.post('prestation', {
              title,
              content,
            }).then(() => {
              navigate('/user/annonces/');
            }, (errors) => {
              setSubmitting(false);
              setErrors(errors);
            });
          }}
        >
          {({
            errors,
            handleBlur,
            handleChange,
            handleSubmit,
            isSubmitting,
            touched,
            values
          }) => (
            <form onSubmit={handleSubmit}>
              <Box mb={3}>
                <Typography
                  color="textPrimary"
                  variant="h2"
                >
                  New provision
                </Typography>
              </Box>
              <TextField
                error={Boolean(touched.title && errors.title)}
                fullWidth
                helperText={touched.title && errors.title}
                label="Title"
                margin="normal"
                name="title"
                onBlur={handleBlur}
                onChange={handleChange}
                type="text"
                value={values.title}
                variant="outlined"
              />
              <TextField
                error={Boolean(touched.content && errors.content)}
                fullWidth
                helperText={touched.content && errors.content}
                label="content"
                margin="normal"
                name="content"
                onBlur={handleBlur}
                onChange={handleChange}
                type="text"
                value={values.content}
                multiline
                rows={10}
                variant="outlined"
              />
              <Box my={2} className={classes.root}>
                <Button
                  color="primary"
                  disabled={isSubmitting}
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Create
                </Button>
                <Button
                  color="default"
                  disabled={isSubmitting}
                  size="large"
                  type="submit"
                  variant="contained"
                >
                  Cancel
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Container>
    </Page>
  );
};

export default AddProvision;
