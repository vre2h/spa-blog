import React from 'react';
import LogInForm from './LogInForm';
import LogOutForm from './LogOutForm';
import { Redirect } from 'react-router-dom';

class Authentication extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirectToReferrer: false,
      name: '',
      password: '',
    };

    this.handleLogOut = this.handleLogOut.bind(this);
    this.sendLogInData = this.sendLogInData.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handlePswd = this.handlePswd.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
    this.closeFormAndReDirerect = this.closeFormAndReDirerect.bind(this);
  }

  handleRedirect() {
    this.setState({
      redirectToReferrer: true,
    });
  }

  closeFormAndReDirerect() {
    const { logInFormClose } = this.props;

    this.handleRedirect();
    logInFormClose();
  }

  handleLogOut() {
    const { logOut } = this.props;

    logOut();
    this.handleRedirect();
    this.closeFormAndReDirerect();
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

  sendLogInData() {
    const { addUserAndLogIn } = this.props;
    const { name, password } = this.state;
    const editName = name.trim();
    const editPassword = password.trim();

    if (editName === '' || editPassword === '') {
      return;
    }

    addUserAndLogIn({ id: (Authentication.userId += 1), name, password });
    this.handleRedirect();
    this.closeFormAndReDirerect();
  }

  render() {
    const { isLoggedIn, logInFormClose, isLogInFormOpen } = this.props;
    const { referrer } = this.props.location.state || {
      referrer: { pathname: '/' },
    };

    const { redirectToReferrer, name, password } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={referrer} />;
    }

    return isLoggedIn ? (
      <div>
        <LogOutForm
          isLogInFormOpen={isLogInFormOpen}
          logInFormClose={logInFormClose}
          closeForm={this.closeFormAndReDirerect}
          logOut={this.handleLogOut}
        />
      </div>
    ) : (
      <div style={{ textAlign: 'center' }}>
        <h2>You should log in to access data!</h2>
        <p>Please, press the button at the top right corner and log in.</p>
        <LogInForm
          isLogInFormOpen={isLogInFormOpen}
          logInFormClose={logInFormClose}
          sendLogInData={this.sendLogInData}
          handleName={this.handleName}
          handlePswd={this.handlePswd}
          name={name}
          pswd={password}
          closeForm={this.closeFormAndReDirerect}
        />
      </div>
    );
  }
}

export default Authentication;
