import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
};

const LogOutForm = props => {
  const { isLogInFormOpen, closeForm, logOut } = props;

  return (
    <Dialog
      open={isLogInFormOpen}
      onClose={closeForm}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Log Out</DialogTitle>
      <DialogContent>
        <DialogContentText>Are you sure about leaving us?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeForm} color="primary">
          Cancel
        </Button>
        <Button onClick={logOut} color="primary">
          Log Out
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default withStyles(styles)(LogOutForm);