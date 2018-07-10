import React from 'react';
import LogIn from './LogIn';
import LogOut from './LogOut';

class Authentication extends React.Component {
  render() {
    const { isLoggedIn, logInToggle } = this.props;

    return isLoggedIn ? (
      <LogOut logInToggle={logInToggle} />
    ) : (
      <LogIn logInToggle={logInToggle} />
    );
  }
}

export default Authentication;
