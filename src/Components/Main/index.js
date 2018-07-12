import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ScrollToTop from '../../Helpers/Scroll/';
import MainNav from '../MainNav';
import Posts from '../PostsPage';
import CreatePost from '../CreatePost';
import Authentication from '../Authentication';
import ProtectedRoute from '../ProtectedRoute';
import delRepeated from './DelRepeated';
import PostPage from '../PostPage';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      isLogInFormOpen: false,
      users: [{ id: 0, name: 'admin', password: 'admin' }],
      posts: [
        {
          content: 'fdasfad',
          id: 1000,
          userId: 0,
          title: 'fas',
          date: '2018',
        },
      ],
    };

    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.logInFormOpen = this.logInFormOpen.bind(this);
    this.logInFormClose = this.logInFormClose.bind(this);
    this.addUserAndLogIn = this.addUserAndLogIn.bind(this);
    this.addPost = this.addPost.bind(this);
    this.handleEditPost = this.handleEditPost.bind(this);
    this.handleDeletePost = this.handleDeletePost.bind(this);
  }

  handleEditPost(post, content) {
    const { posts } = this.state;
    const newPosts = posts.reduce((acc, elem) => {
      if (elem.id === post.id) {
        return [...acc, { ...elem, content }];
      }

      return [...acc, elem];
    }, []);

    this.setState({
      posts: newPosts,
    });
  }

  handleDeletePost(post) {
    const { posts } = this.state;

    const newPosts = posts.filter(item => post.id !== item.id);

    this.setState({
      posts: newPosts,
    });
  }

  addUserAndLogIn(newUser) {
    const { users } = this.state;
    const filtered = delRepeated(newUser, users);

    const newUsers = filtered.concat(newUser);

    this.setState({
      users: newUsers,
    });
    this.logIn();
  }

  addPost(newPost) {
    const { posts } = this.state;
    const newPosts = posts.concat(newPost);

    this.setState({
      posts: newPosts,
    });
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
    const { isLoggedIn, isLogInFormOpen, posts } = this.state;
    const { users } = this.state;
    const user = users[users.length - 1];

    return (
      <Router>
        <ScrollToTop>
          <MainNav isLoggedIn={isLoggedIn} logInFormOpen={this.logInFormOpen} />

          <Switch>
            <Route
              exact
              path="/"
              component={props => (
                <Posts {...props} posts={posts} users={users} />
              )}
            />
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
              addPost={this.addPost}
              user={user}
            />
            <Route
              path={`/post/:postId`}
              render={({ match }) => (
                <PostPage
                  postId={match.params.postId}
                  posts={posts}
                  users={users}
                  handleEditPost={this.handleEditPost}
                  handleDeletePost={this.handleDeletePost}
                />
              )}
            />
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}

export default Main;
