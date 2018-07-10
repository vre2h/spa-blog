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
        <h2>Are you sure you want to log out</h2>
        <button onClick={this.clickHandler}>YES!</button>
      </div>
    );
  }
}

export default LogIn;
