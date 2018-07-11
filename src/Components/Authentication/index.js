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
    const { logOut, logInFormClose } = this.props;

    logOut();
    this.handleRedirect();
    logInFormClose();
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
    const { addUserAndLogIn, logInFormClose } = this.props;
    const { name, password } = this.state;

    addUserAndLogIn({ id: (LogInForm.userId += 1), name, password });
    this.handleRedirect();
    logInFormClose();
  }

  render() {
    const { isLoggedIn, logInFormClose, isLogInFormOpen } = this.props;

    const { referrer } = this.props.location.state || {
      referrer: { pathname: '/' },
    };

    const { redirectToReferrer, name, pswd } = this.state;

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
      <div>
        <LogInForm
          isLogInFormOpen={isLogInFormOpen}
          logInFormClose={logInFormClose}
          sendLogInData={this.sendLogInData}
          handleName={this.handleName}
          handlePswd={this.handlePswd}
          name={name}
          pswd={pswd}
        />
      </div>
    );
  }
}

export default Authentication;
