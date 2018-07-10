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

    this.state = {
      name: '',
      password: '',
    };

    this.handleName = this.handleName.bind(this);
    this.handlePswd = this.handlePswd.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
  }

  handlePswd(event) {
    this.setState({
      password: event.target.value,
    });
  }

  handleName(event) {
    this.setState({
      name: event.target.value,
    });
  }

  handleLogIn() {
    const { addUserAndLogIn, logInFormClose } = this.props;
    const { name, password } = this.state;

    addUserAndLogIn({ name, password });
    logInFormClose();
  }

  render() {
    const { isLogInFormOpen, logInFormClose, logOut } = this.props;

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
          <Button onClick={logOut} color="primary">
            Log Out
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles)(LogOutForm);
