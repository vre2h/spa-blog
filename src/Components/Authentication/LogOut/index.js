import React from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const LogOutForm = props => {
  const { logOut } = props;

  return (
    <Grid container direction="column" alignItems="center">
      <h1>Log Out</h1>
      <p>Are you sure about leaving us?</p>
      <Button onClick={logOut} variant="contained" color="primary">
        Log Out
      </Button>
    </Grid>
  );
};

export default LogOutForm;
