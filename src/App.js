import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './Helpers/Scroll/';

import 'normalize.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Router>
          <ScrollToTop>
            <div className="App"> </div>
          </ScrollToTop>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
