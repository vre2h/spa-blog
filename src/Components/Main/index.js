import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ScrollToTop from '../../Helpers/Scroll/';
import MainNav from '../MainNav';
import Posts from '../PostsPage';
import CreatePost from '../CreatePost';
import Authentication from '../Authentication';
import ProtectedRoute from '../ProtectedRoute';
import PostPage from '../PostPage';

class Main extends React.Component {
  constructor(props) {
    super(props);

    const users = JSON.parse(localStorage.getItem('users'));
    const comments = JSON.parse(localStorage.getItem('comments'));
    const posts = JSON.parse(localStorage.getItem('posts'));
    const isOnline = users ? users.some(user => user.isOnline) : false;

    this.state = {
      isLoggedIn: isOnline,
      isLogInFormOpen: false,
      users: users || [],
      comments: comments || [],
      posts: posts || [],
    };

    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.logInFormOpen = this.logInFormOpen.bind(this);
    this.logInFormClose = this.logInFormClose.bind(this);
    this.addUserAndLogIn = this.addUserAndLogIn.bind(this);
    this.addPost = this.addPost.bind(this);
    this.addComment = this.addComment.bind(this);
    this.handleEditPost = this.handleEditPost.bind(this);
    this.handleDeletePost = this.handleDeletePost.bind(this);
    this.handleEditComment = this.handleEditComment.bind(this);
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
  }

  handleEditComment(comment, content) {
    const { comments } = this.state;
    const newComments = comments.reduce((acc, elem) => {
      if (elem.id === comment.id) {
        return [...acc, { ...elem, content }];
      }

      return [...acc, elem];
    }, []);

    localStorage.setItem('comments', JSON.stringify(newComments));

    this.setState({
      comments: newComments,
    });
  }

  handleDeleteComment(comment) {
    const { comments } = this.state;

    const newComments = comments.filter(item => comment.id !== item.id);

    localStorage.setItem('comments', JSON.stringify(newComments));

    this.setState({
      comments: newComments,
    });
  }

  addComment(newComment) {
    const { comments } = this.state;
    const newComments = [newComment, ...comments];

    localStorage.setItem('comments', JSON.stringify(newComments));

    this.setState({
      comments: newComments,
    });
  }

  handleEditPost(post, content) {
    const { posts } = this.state;
    const newPosts = posts.reduce((acc, elem) => {
      if (elem.id === post.id) {
        return [...acc, { ...elem, content }];
      }

      return [...acc, elem];
    }, []);

    localStorage.setItem('posts', JSON.stringify(newPosts));

    this.setState({
      posts: newPosts,
    });
  }

  handleDeletePost(post) {
    const { posts, comments } = this.state;

    const newPosts = posts.filter(item => post.id !== item.id);
    const newComments = comments.filter(comment => post.id !== comment.postId);
    localStorage.setItem('posts', JSON.stringify(newPosts));
    localStorage.setItem('comments', JSON.stringify(newComments));

    this.setState({
      posts: newPosts,
      comments: newComments,
    });
  }

  addUserAndLogIn(newUser) {
    const { users } = this.state;
    const index = users.findIndex(
      user => user.name === newUser.name && user.password === newUser.password
    );

    const newUsers =
      index === -1
        ? users.concat(newUser)
        : [...users.slice(0, index), newUser, ...users.slice(index + 1)];

    localStorage.setItem('users', JSON.stringify(newUsers));

    this.setState({
      users: newUsers,
    });
    this.logIn();
  }

  addPost(newPost) {
    const { posts } = this.state;
    const newPosts = [newPost, ...posts];

    localStorage.setItem('posts', JSON.stringify(newPosts));

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
    const { users } = this.state;

    const newUsers = users.map(user => ({
      ...user,
      isOnline: false,
    }));

    localStorage.setItem('users', JSON.stringify(newUsers));

    this.setState(({ isLoggedIn }) => ({
      isLoggedIn: false,
      users: newUsers,
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
    const { isLoggedIn, isLogInFormOpen, posts, comments, users } = this.state;
    const [currentUser] = users.filter(user => user.isOnline);

    return (
      <Router>
        <ScrollToTop>
          <MainNav isLoggedIn={isLoggedIn} logInFormOpen={this.logInFormOpen} />

          <Switch>
            <Route
              exact
              path="/spa-blog"
              component={props => (
                <Posts
                  {...props}
                  isLoggedIn={isLoggedIn}
                  posts={posts}
                  users={users}
                />
              )}
            />
            <Route
              path="/spa-blog/auth"
              render={props => (
                <Authentication
                  {...props}
                  isLoggedIn={isLoggedIn}
                  addUserAndLogIn={this.addUserAndLogIn}
                  logOut={this.logOut}
                  isLogInFormOpen={isLogInFormOpen}
                  logInFormClose={this.logInFormClose}
                  addUser={this.addUser}
                  usersList={this.state.users}
                />
              )}
            />
            <ProtectedRoute
              path="/spa-blog/blog/create"
              isLoggedIn={isLoggedIn}
              component={CreatePost}
              addPost={this.addPost}
              currentUser={currentUser}
            />
            <ProtectedRoute
              path={`/spa-blog/post/:postId`}
              isLoggedIn={isLoggedIn}
              component={PostPage}
              posts={posts}
              users={users}
              handleEditPost={this.handleEditPost}
              handleDeletePost={this.handleDeletePost}
              handleEditComment={this.handleEditComment}
              handleDeleteComment={this.handleDeleteComment}
              addComment={this.addComment}
              comments={comments}
              currentUser={currentUser}
            />
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}

export default Main;
