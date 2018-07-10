import React from 'react';

class Authentication extends React.Component {
  render() {
    const { isLoggedIn, logInToggle } = this.props;

    return isLoggedIn ? (
      <div>
        <h2>Are you sure you want to log out</h2>
        <button onClick={logInToggle}>YES!</button>
      </div>
    ) : (
      <div>
        <h2>You should Log In!</h2>
        <button onClick={logInToggle}>Log In</button>
      </div>
    );
  }
}

export default Authentication;
