import React from 'react';

class LogIn extends React.Component {
  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    const { logInToggle } = this.props;

    logInToggle(false);
  }

  render() {
    return (
      <div>
        <h2>You have Logged In!</h2>
        <button onClick={this.clickHandler}>Log Out</button>
      </div>
    );
  }
}

export default LogIn;
