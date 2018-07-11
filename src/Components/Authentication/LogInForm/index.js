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

class LogInForm extends React.Component {
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

  static userId = 0;

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
    const { addUserAndLogIn, logInFormClose, addRedirect } = this.props;
    const { name, password } = this.state;

    addUserAndLogIn({ id: (LogInForm.userId += 1), name, password });
    addRedirect();
    logInFormClose();
  }

  render() {
    const { classes, isLogInFormOpen, logInFormClose } = this.props;

    return (
      <Dialog
        open={isLogInFormOpen}
        onClose={logInFormClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Log In</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Welcome back, buddy. Type your name and password.
          </DialogContentText>
          <form className={classes.root}>
            <TextField
              id="name"
              label="Name"
              margin="normal"
              value={this.state.name}
              onChange={this.handleName}
            />
            <TextField
              id="password-input"
              label="Password"
              type="password"
              margin="normal"
              value={this.state.password}
              onChange={this.handlePswd}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={logInFormClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleLogIn} color="primary">
            logIn
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles)(LogInForm);
