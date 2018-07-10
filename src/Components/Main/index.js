import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ScrollToTop from '../../Helpers/Scroll/';
import MainNav from '../MainNav';
import Authentication from '../Authentication';
class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };

    this.logInToggle = this.logInToggle.bind(this);
  }

  logInToggle() {
    this.setState(({ isLoggedIn }) => ({
      isLoggedIn: !isLoggedIn,
    }));
  }

  render() {
    const { isLoggedIn } = this.state;

    return (
      <Router>
        <ScrollToTop>
          <MainNav isLoggedIn={isLoggedIn} />

          <Switch>
            <Route exact path="/" render={() => <h1>Blogs</h1>} />
            <Route
              path="/login"
              render={() => (
                <Authentication
                  isLoggedIn={isLoggedIn}
                  logInToggle={this.logInToggle}
                />
              )}
            />
            <Route path="/blog/create" render={() => <h1>Create Post</h1>} />
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}

export default Main;
