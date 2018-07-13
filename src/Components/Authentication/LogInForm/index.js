import React from 'react';
import TextField from '@material-ui/core/TextField';
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

const LogInForm = props => {
  const {
    classes,
    isLogInFormOpen,
    closeForm,
    handlePswd,
    handleName,
    name,
    pswd,
    sendLogInData,
  } = props;

  return (
    <Dialog
      open={isLogInFormOpen}
      onClose={closeForm}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Log In</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Welcome back, buddy. Type your name and password.
        </DialogContentText>
        <form className={classes.root}>
          <TextField
            required
            error={name.trim() === '' ? true : false}
            id="name"
            label={name.trim() === '' ? 'Fill the field' : 'Name'}
            margin="normal"
            value={name}
            onChange={handleName}
          />
          <TextField
            required
            error={pswd.trim() === '' ? true : false}
            id="password-input"
            label={pswd.trim() === '' ? 'Fill the field' : 'Password'}
            type="password"
            margin="normal"
            value={pswd}
            onChange={handlePswd}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeForm} color="primary">
          Cancel
        </Button>
        <Button
          disabled={pswd.trim() === '' || name.trim() === '' ? true : false}
          onClick={sendLogInData}
          color="primary"
        >
          logIn
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default withStyles(styles)(LogInForm);
