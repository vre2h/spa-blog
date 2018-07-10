import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ScrollToTop from '../../Helpers/Scroll/';
import MainNav from '../MainNav';
import Authentication from '../Authentication';
class Main extends React.Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <MainNav />

          <Switch>
            <Route exact path="/" render={() => <h1>Blogs</h1>} />
            <Route path="/login" component={Authentication} />
            <Route path="/blog/create" render={() => <h1>Create Post</h1>} />
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}

export default Main;
