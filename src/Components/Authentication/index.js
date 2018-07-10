import React from 'react';
import LogIn from './LogIn';
import LogOut from './LogOut';

class Authentication extends React.Component {
  render() {
    const { isLoggedIn, logInToggle } = this.props;

    return isLoggedIn ? (
      <LogIn logInToggle={logInToggle} />
    ) : (
      <LogOut logInToggle={logInToggle} />
    );
  }
}

export default Authentication;
