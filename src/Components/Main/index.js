import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ScrollToTop from '../../Helpers/Scroll/';
import MainNav from '../MainNav';
import CreatePost from '../CreatePost';
import Authentication from '../Authentication';
import ProtectedRoute from '../ProtectedRoute';

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
              path="/auth"
              render={props => (
                <Authentication
                  {...props}
                  isLoggedIn={isLoggedIn}
                  addUserAndLogIn={this.addUserAndLogIn}
                  logOut={this.logOut}
                  isLogInFormOpen={isLogInFormOpen}
                  logInFormClose={this.logInFormClose}
                  addUser={this.addUser}
                />
              )}
            />
            <ProtectedRoute
              isLoggedIn={isLoggedIn}
              path="/blog/create"
              component={CreatePost}
            />
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}

export default Main;
