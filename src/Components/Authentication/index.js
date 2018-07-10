import React from 'react';
import LogIn from './LogIn';
import LogOut from './LogOut';

class Authentication extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };

    this.logInToggle = this.logInToggle.bind(this);
  }

  logInToggle(value) {
    this.setState({
      isLoggedIn: value,
    });
  }

  render() {
    const { isLoggedIn } = this.state;

    return isLoggedIn ? (
      <LogIn logInToggle={this.logInToggle} />
    ) : (
      <LogOut logInToggle={this.logInToggle} />
    );
  }
}

export default Authentication;
