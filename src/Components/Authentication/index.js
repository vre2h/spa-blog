import React from 'react';
import LogInForm from './LogInForm';
import LogOutForm from './LogOutForm';
import { Redirect } from 'react-router-dom';

class Authentication extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirectToReferrer: false,
    };

    this.handleRedirect = this.handleRedirect.bind(this);
  }

  handleRedirect() {
    this.setState({
      redirectToReferrer: true,
    });
  }

  render() {
    const {
      isLoggedIn,
      logInFormClose,
      addUserAndLogIn,
      logOut,
      isLogInFormOpen,
    } = this.props;

    const { referrer } = this.props.location.state || {
      referrer: { pathname: '/' },
    };

    const { redirectToReferrer } = this.state;

    if (redirectToReferrer || !isLogInFormOpen) {
      return <Redirect to={referrer} />;
    }

    return isLoggedIn ? (
      <div>
        <LogOutForm
          isLogInFormOpen={isLogInFormOpen}
          logInFormClose={logInFormClose}
          logOut={logOut}
        />
      </div>
    ) : (
      <div>
        <LogInForm
          isLogInFormOpen={isLogInFormOpen}
          logInFormClose={logInFormClose}
          addUserAndLogIn={addUserAndLogIn}
          addRedirect={this.handleRedirect}
        />
      </div>
    );
  }
}

export default Authentication;
