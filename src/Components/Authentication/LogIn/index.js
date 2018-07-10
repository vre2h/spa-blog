import React from 'react';

class LogOut extends React.Component {
  constructor(props) {
    super(props);

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    const { logInToggle } = this.props;

    logInToggle(true);
  }

  render() {
    return (
      <div>
        <h2>You should Log In!</h2>
        <button onClick={this.clickHandler}>Log In</button>
      </div>
    );
  }
}

export default LogOut;
