import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from './Components/Main';

import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Router>
          <Main />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
