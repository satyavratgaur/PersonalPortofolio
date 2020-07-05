import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const tempStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const gridsys = () => {
  const classes = tempStyles();

  function FormRow(){
    return (
      <React.Fragment>
        <Grid item xs={3}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <Grid container spacing={1}>
        
        <FormRow />
      </Grid>
    );
}

export default gridsys;