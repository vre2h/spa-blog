import React from 'react';
import LogInForm from './LogInForm';
import LogOutForm from './LogOutForm';

class Authentication extends React.Component {
  render() {
    const {
      isLoggedIn,
      logInFormClose,
      addUserAndLogIn,
      logOut,
      isLogInFormOpen,
    } = this.props;

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
        />
      </div>
    );
  }
}

export default Authentication;
