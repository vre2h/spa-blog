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
      isLogInFormOpen: false,
      users: [],
    };

    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.logInFormOpen = this.logInFormOpen.bind(this);
    this.logInFormClose = this.logInFormClose.bind(this);
    this.addUserAndLogIn = this.addUserAndLogIn.bind(this);
  }

  addUserAndLogIn(newUser) {
    const { users } = this.state;
    const newUsers = users.concat(newUser);

    this.setState({
      users: newUsers,
    });
    this.logIn();
  }

  logIn() {
    this.setState(({ isLoggedIn }) => ({
      isLoggedIn: true,
    }));
  }

  logOut() {
    this.setState(({ isLoggedIn }) => ({
      isLoggedIn: false,
    }));
  }

  logInFormOpen() {
    this.setState({
      isLogInFormOpen: true,
    });
  }

  logInFormClose() {
    this.setState({
      isLogInFormOpen: false,
    });
  }

  render() {
    const { isLoggedIn, isLogInFormOpen } = this.state;

    return (
      <Router>
        <ScrollToTop>
          <MainNav isLoggedIn={isLoggedIn} logInFormOpen={this.logInFormOpen} />

          <Switch>
            <Route exact path="/" render={() => <h1>Blogs</h1>} />
            <Route
              path="/login"
              render={() => (
                <Authentication
                  isLoggedIn={isLoggedIn}
                  addUserAndLogIn={this.addUserAndLogIn}
                  logOut={this.logOut}
                  isLogInFormOpen={isLogInFormOpen}
                  logInFormClose={this.logInFormClose}
                  addUser={this.addUser}
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
