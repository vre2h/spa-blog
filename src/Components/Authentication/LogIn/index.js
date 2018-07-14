import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = {
  button: {
    margin: '20px 0',
  },
};

const LogInForm = props => {
  const { handlePswd, handleName, name, pswd, sendLogInData, classes } = props;

  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={6}>
        <h1>Log in</h1>
        <Grid container direction="column">
          <TextField
            required
            id="name"
            label={'Name'}
            margin="normal"
            value={name}
            onChange={handleName}
          />
          <TextField
            required
            id="password-input"
            label={'Password'}
            type="password"
            margin="normal"
            value={pswd}
            onChange={handlePswd}
          />
          <Button
            onClick={sendLogInData}
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Log In
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(LogInForm);
