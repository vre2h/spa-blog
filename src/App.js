import React, { Component } from 'react';

import Main from './Components/Main';

import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Main />
      </React.Fragment>
    );
  }
}

export default App;
