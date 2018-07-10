import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ScrollToTop from '../../Helpers/Scroll/';
import MainNav from '../MainNav';

class Main extends React.Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <MainNav />

          <Switch>
            <Route exact path="/" render={() => <h1>Blogs</h1>} />
            <Route path="/login" render={() => <h1>Log In</h1>} />
            <Route path="/blog/create" render={() => <h1>Create Post</h1>} />
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}

export default Main;
