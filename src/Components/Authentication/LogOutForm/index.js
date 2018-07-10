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

class LogOutForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut() {
    const { logOut, logInFormClose } = this.props;

    logOut();
    logInFormClose();
  }

  render() {
    const { isLogInFormOpen, logInFormClose } = this.props;

    return (
      <Dialog
        open={isLogInFormOpen}
        onClose={logInFormClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Log Out</DialogTitle>
        <DialogContent>
          <DialogContentText>Are you sure about leaving us?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={logInFormClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleLogOut} color="primary">
            Log Out
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles)(LogOutForm);
